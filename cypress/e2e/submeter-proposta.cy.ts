// Blindagem contra erros de React/Angular no front-end
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Atividade 2 - Submeter Proposta (Edital 2026-0001)', () => {

  // ============================================================================
  // FUNÇÕES UTILITÁRIAS DE ALTA PRECISÃO
  // ============================================================================
  const selecionarOpcao = (campoConfig: string, opcaoSelect: string, textoBusca?: string) => {
    cy.get(`[data-cy="open-${campoConfig}"]`, { timeout: 15000 }).should('exist').click({ force: true });
    cy.wait(1000); // Respiro de renderização do portal do Material UI
    
    if (textoBusca) {
      cy.get(`[data-cy="search-${campoConfig}"]`).clear({ force: true }).type(textoBusca, { delay: 0, force: true });
      cy.wait(1000); 
    }

    // Aumentado o delay para garantir que listas anteriores fecharam (corrige o erro do "12" da duração)
    cy.get(`[data-cy="${opcaoSelect}"]`, { timeout: 15000 }).last().click({ force: true });
    cy.wait(1000); 
  };

  const executarSeExistir = (seletor: string, acao: () => void) => {
    cy.wait(2000); 
    cy.get('body').then(($body) => {
      const el = $body.find(seletor);
      if (el.length > 0 && el.is(':visible')) {
        acao();
      } else {
        cy.log(`⚠️ IDEMPOTÊNCIA: ${seletor} oculto. Assumindo dado já preenchido.`);
      }
    });
  };

  // Motor Inteligente para Checkboxes baseados em Comportamento
  const ativarCheckboxCondicional = (seletorBox: string, seletorAlvo: string) => {
    cy.wait(1000);
    cy.get('body').then(($body) => {
      // Se o campo alvo que o checkbox habilita NÃO estiver na tela, clicamos na caixa!
      if ($body.find(`[data-cy="${seletorAlvo}"]`).length === 0) {
        cy.get(`[data-cy="${seletorBox}"]`).click({ force: true });
        cy.wait(1000);
      } else {
        cy.log(`⚠️ IDEMPOTÊNCIA: Checkbox ${seletorBox} já estava ativado.`);
      }
    });
  };

  // ============================================================================
  // SETUP GLOBAL (RODA ANTES DE CADA TESTE)
  // ============================================================================
  beforeEach(() => {
    cy.fixture('submeter-proposta').as('dados');

    cy.intercept('GET', '**/api/proposta/minhas-propostas**').as('loadPropostas');
    cy.intercept('PUT', '**/api/proposta/**').as('putProposta');
    cy.intercept('POST', '**/api/proposta').as('postProposta');
    cy.intercept('POST', '**/api/anexo/**').as('postAnexo');
    cy.intercept('GET', '**/evaluations**').as('getPendencias');
    cy.intercept('POST', '**/submeter**').as('postSubmeterProposta');

    cy.visit('/');
    
    cy.fixture('submeter-proposta').then((dados) => {
      cy.get('input[type="email"]').clear({ force: true }).type(dados.credenciais.email, { force: true });
      cy.get('input[type="password"]').clear({ force: true }).type(dados.credenciais.senha, { force: true });
      cy.get('button[type="submit"]').click({ force: true });
    });
    
    cy.url().should('include', '/home');
    cy.wait('@loadPropostas', { timeout: 15000 });
    cy.wait(2000); 

    // Navegação Imune a Falhas
    cy.get('body').then(($body) => {
      const cardProposta = $body.find('[data-cy^="propostas-"]');
      
      if (cardProposta.length > 0) {
        cy.log('✅ Proposta existente encontrada. Retomando modo de Edição!');
        cy.wrap(cardProposta).first().click({ force: true });
        cy.get('[data-cy="caracterizacao"]', { timeout: 15000 }).should('be.visible');

        cy.get('body').then(($tela) => {
          const btnEditar = $tela.find('[data-cy="editar-button"], [title*="Editar"], button:contains("Editar"), .fa-edit');
          if (btnEditar.length > 0) {
            cy.wrap(btnEditar).first().click({ force: true });
            cy.wait(1500); 
          }
        });
      } else {
        cy.get('[data-cy="editais-ver-mais"]', { timeout: 15000 }).should('be.visible').click({ force: true });
        cy.contains('div', 'Edital 2026-0001', { matchCase: false, timeout: 15000 }).contains('button', /Visualizar edital/i).click({ force: true });
        cy.get('[data-cy="criar-proposta"]', { timeout: 15000 }).should('be.visible').click({ force: true });
      }
    });

    cy.get('[data-cy="caracterizacao"]', { timeout: 15000 }).should('be.visible');
  });

  // ============================================================================
// TESTE 1: CARACTERIZAÇÃO
// ============================================================================
it("1. Deve preencher a seção 'Caracterização'", function () {
  const dados = this.dados;

  cy.get('[data-cy="informacoes-iniciais"]').click({ force: true });

  cy.get('[data-cy="titulo"]')
    .clear({ force: true })
    .type(
      dados.caracterizacao.informacoesIniciais.tituloProjeto,
      { force: true }
    );

  selecionarOpcao(
    'estado-execucao-evento',
    dados.caracterizacao.informacoesIniciais.estadoExecucao
  );

  selecionarOpcao(
    'tipo-evento-id',
    dados.caracterizacao.informacoesIniciais.tipoEvento
  );

  selecionarOpcao(
    'municipio-execucao-evento',
    dados.caracterizacao.informacoesIniciais.municipioExecucao
  );

  cy.get('[data-cy="duracao"]')
    .clear({ force: true })
    .type(
      dados.caracterizacao.informacoesIniciais.duracaoMeses,
      { force: true }
    );

  selecionarOpcao(
    'instituicao-executora-id',
    dados.caracterizacao.informacoesIniciais.instituicaoExecutora
  );

  selecionarOpcao(
    'unidade-executora-id',
    dados.caracterizacao.informacoesIniciais.unidadeExecutora
  );

  executarSeExistir('[data-cy="add-areas-de-conhecimento"]', () => {
    cy.get('[data-cy="add-areas-de-conhecimento"]').click({
      force: true,
    });

    selecionarOpcao(
      'grande-area-id',
      dados.caracterizacao.informacoesIniciais.areaConhecimento.grandeArea
    );

    selecionarOpcao(
      'area-id',
      dados.caracterizacao.informacoesIniciais.areaConhecimento.area
    );

    selecionarOpcao(
      'sub-area-id',
      dados.caracterizacao.informacoesIniciais.areaConhecimento.subArea
    );

    selecionarOpcao(
      'especialidade-id',
      dados.caracterizacao.informacoesIniciais.areaConhecimento.especialidade
    );

    cy.get('[data-cy="areaDeConhecimento-confirmar"]').click({
      force: true,
    });
  });

  // --------------------------------------------------------------------------
  // Informações Complementares
  // --------------------------------------------------------------------------

  cy.get('[data-cy="informacoes-complementares"]').click({
    force: true,
  });

  cy.get(
    `[data-cy="${dados.caracterizacao.informacoesComplementares.faturamentoId}"]`
  ).click({ force: true });

  cy.get(
    '[data-cy="formularioPropostaInformacaoComplementar.pergunta-219"]'
  )
    .clear({ force: true })
    .type(
      dados.caracterizacao.informacoesComplementares.justificativa,
      { force: true }
    );

  // --------------------------------------------------------------------------
  // Abrangência
  // --------------------------------------------------------------------------

  cy.get('[data-cy="abrangencia"]').click({ force: true });

  executarSeExistir('[data-cy="add-button"]', () => {
    cy.get('[data-cy="add-button"]').click({ force: true });

    selecionarOpcao(
      'estado-id',
      dados.caracterizacao.abrangencia.estado,
      'Mato Grosso do Sul'
    );

    cy.wait(1000);

    selecionarOpcao(
      'abrangencia-municipio',
      dados.caracterizacao.abrangencia.municipio,
      'Campo Grande'
    );

    cy.get('[data-cy="abrangencia-confirmar"]').click({
      force: true,
    });
  });

  // --------------------------------------------------------------------------
  // Salvar
  // --------------------------------------------------------------------------

  cy.get('[data-cy="menu-salvar"]')
    .should('be.visible')
    .click({ force: true });

  cy.wait('@putProposta', {
    timeout: 15000,
  });

  cy.get('[data-cy="coordenacao"]')
    .should('be.visible');
});
  // ============================================================================
  // TESTE 2: COORDENAÇÃO
  // ============================================================================
  it('2. Dados do Coordenador', function () {
    const dados = this.dados.coordenacao;

    cy.get('[data-cy="coordenacao"]').click({ force: true });
    cy.get('[data-cy="dados-pessoais"]').click({ force: true });
    
    cy.wait(1500);
    cy.get('body').then(($body) => {
      const celularInput = $body.find('[data-cy="criadoPor.celular"]');
      if (celularInput.length > 0 && (!celularInput.val() || String(celularInput.val()).trim() === '')) {
        cy.wrap(celularInput).clear({ force: true }).type(dados.dadosPessoais.celular, { force: true });
      }
    });
    selecionarOpcao('raca-cor-id', dados.dadosPessoais.racaCor);

    cy.get('[data-cy="endereco"]').click({ force: true });
    cy.get('[data-cy="criadoPor.endereco.cep"]').clear({ force: true }).type(dados.endereco.cep, { force: true });
    cy.get('[data-cy="criadoPor.endereco.logradouro"]').clear({ force: true }).type(dados.endereco.logradouro, { force: true });
    cy.get('[data-cy="criadoPor.endereco.numero"]').clear({ force: true }).type(dados.endereco.numero, { force: true });
    cy.get('[data-cy="criadoPor.endereco.complemento"]').clear({ force: true }).type(dados.endereco.complemento, { force: true });
    cy.get('[data-cy="criadoPor.endereco.bairro"]').clear({ force: true }).type(dados.endereco.bairro, { force: true });
    selecionarOpcao('estado', dados.endereco.estado, 'Mato Grosso do Sul');
    selecionarOpcao('municipio', dados.endereco.municipio, 'Campo Grande');

    cy.get('[data-cy="dados-academicos"]').click({ force: true });
    selecionarOpcao('instituicao-id', dados.dadosAcademicos.instituicao);
    selecionarOpcao('unidade-id', dados.dadosAcademicos.unidade);
    selecionarOpcao('nivel-academico-id', dados.dadosAcademicos.nivelAcademico);
    
    executarSeExistir('[data-cy="add-areas-de-conhecimento"]', () => {
      cy.get('[data-cy="add-areas-de-conhecimento"]').click({ force: true });
      selecionarOpcao('grande-area-id', dados.dadosAcademicos.areaConhecimento.grandeArea);
      selecionarOpcao('area-id', dados.dadosAcademicos.areaConhecimento.area);
      selecionarOpcao('sub-area-id', dados.dadosAcademicos.areaConhecimento.subArea);
      selecionarOpcao('especialidade-id', dados.dadosAcademicos.areaConhecimento.especialidade);
      cy.get('[data-cy="criadoPor.areaDeConhecimento-confirmar"]').click({ force: true });
    });

    cy.get('[data-cy="dados-profissionais"]').click({ force: true });
    
    // Uso da nossa lógica de inteligência para não desmarcar o Vínculo Institucional
    ativarCheckboxCondicional('possui-vinculo-institucional-box', 'open-tipo-vinculo-institucional');
    
    selecionarOpcao('tipo-vinculo-institucional', dados.dadosProfissionais.tipoVinculo);
    cy.get('[data-cy="criadoPor.vinculoInstitucional.inicioServico"]').clear({ force: true }).type(dados.dadosProfissionais.inicioServico, { force: true });
    selecionarOpcao('regime-trabalho-id', dados.dadosProfissionais.regimeTrabalho);
    cy.get('[data-cy="criadoPor.vinculoInstitucional.funcao"]').clear({ force: true }).type(dados.dadosProfissionais.funcao, { force: true });
    cy.get('[data-cy="criadoPor.vinculoInstitucional.inicioFuncao"]').clear({ force: true }).type(dados.dadosProfissionais.inicioFuncao, { force: true });

    cy.get('[data-cy="menu-salvar"]').click({ force: true });
    cy.wait(3000);
  });

  // ============================================================================
  // TESTE 3: APRESENTAÇÃO E ORÇAMENTO
  // ============================================================================
  it('3. Apresentação do Projeto e Estruturação de Orçamento', function () {
    const dados = this.dados.apresentacao;

    cy.get('[data-cy="apresentacao"]').click({ force: true });

    cy.get('[data-cy="descricao"]').click({ force: true });
    cy.get(`[data-cy="${dados.descricao.opcaoId}"]`).click({ force: true });
    cy.get('[data-cy="formularioPropostaDescritiva.pergunta-222"]').clear({ force: true }).type(dados.descricao.justificativa, { force: true });

    cy.get('[data-cy="indicadores-de-producao"]').click({ force: true });
    cy.wait(1500);
    cy.get('table').find('input[type="number"]').each(($el) => {
      cy.wrap($el).clear({ force: true }).type('0', { force: true });
    });

    cy.contains('tr', dados.indicadoresProducao.linhaAlvo).within(() => {
      cy.get('input[type="number"]').eq(0).clear({ force: true }).type(dados.indicadoresProducao.qtdeNacional, { force: true });
      cy.get('input[type="number"]').eq(1).clear({ force: true }).type(dados.indicadoresProducao.qtdeInternacional, { force: true });
    });

    cy.get('[data-cy="atividades"]').click({ force: true });
    executarSeExistir('[data-cy="add-button"]', () => {
      cy.get('[data-cy="add-button"]').click({ force: true });
      
      const tituloUnico = dados.atividades.titulo + " " + Date.now();
      cy.get('[data-cy="propostaAtividadeForm.titulo"]').clear({ force: true }).type(tituloUnico, { force: true });
      cy.get('[data-cy="propostaAtividadeForm.descricao"]').clear({ force: true }).type(dados.atividades.descricao, { force: true });
      
      selecionarOpcao('mes-inicio', dados.atividades.mesInicio);
      selecionarOpcao('duracao', dados.atividades.duracao);
      selecionarOpcao('carga-horaria-semanal', dados.atividades.cargaHoraria);
      
      cy.get('[data-cy="propostaAtividade-confirmar"]').click({ force: true });
    });

    cy.get('[data-cy="orcamento"]').click({ force: true });
    cy.get('[data-cy="faixa-de-financiamento"]').click({ force: true });
    selecionarOpcao('faixa-financiamento-id', dados.orcamento.faixaFinanciamento);

    cy.get('[data-cy="bolsa"]').click({ force: true });
    executarSeExistir('[data-cy="add-button"]', () => {
      cy.get('[data-cy="add-button"]').click({ force: true });
      selecionarOpcao('modalidade-bolsa-id', dados.orcamento.bolsa.modalidade);
      cy.wait(1500); 
      selecionarOpcao('nivel-bolsa-id', dados.orcamento.bolsa.nivel);
      
      cy.get('[data-cy="rubricaBolsaForm.quantidade"]').clear({ force: true }).type(dados.orcamento.bolsa.quantidade, { force: true }).blur();
      selecionarOpcao('duracao', dados.orcamento.bolsa.duracaoMeses);
      
      cy.wait(2000); 
      cy.get('[data-cy="rubricaBolsaForm.valorTotal"]').invoke('val').should('not.be.empty');
      
      // Inteligência para não desmarcar a Contrapartida da Bolsa
      ativarCheckboxCondicional('contrapartida-box', 'open-tipo-pessoa');
      
      selecionarOpcao('tipo-pessoa', dados.orcamento.bolsa.contrapartida.tipoPessoa);
      cy.get('[data-cy="rubricaBolsaForm.entidade"]').clear({ force: true }).type(dados.orcamento.bolsa.contrapartida.entidade, { force: true });
      cy.get('[data-cy="rubricaBolsa-confirmar"]').click({ force: true });
    });

    cy.get('[data-cy="menu-salvar"]').click({ force: true });
    cy.wait(3000);
  });

  // ============================================================================
  // TESTE 4: ANEXOS OBRIGATÓRIOS
  // ============================================================================
  it('4. Upload de Documentos Pessoais e da Proposta', function () {
    const dados = this.dados.anexos;

    cy.get('[data-cy="anexos"]').click({ force: true });

    cy.get('[data-cy="documentos-pessoais"]').click({ force: true });
    executarSeExistir('[data-cy="open-select-categories-criado-po"]', () => {
      selecionarOpcao('select-categories-criado-po', dados.documentosPessoais.categoria); 
      cy.get('[data-cy="criadoPor.usuarioAnexo-upload"]')
        .parent()
        .find('input[type="file"]')
        .selectFile(`cypress/fixtures/${dados.documentosPessoais.caminhoArquivo}`, { force: true });
      cy.wait('@postAnexo');
    });

    cy.get('[data-cy="documentos-da-proposta"]').click({ force: true });
    executarSeExistir('[data-cy="open-select-categories-documento"]', () => {
      selecionarOpcao('select-categories-documento', dados.documentosProposta.categoria); 
      cy.get('[data-cy="documentoPropostaAnexo-upload"]')
        .parent()
        .find('input[type="file"]')
        .selectFile(`cypress/fixtures/${dados.documentosProposta.caminhoArquivo}`, { force: true });
      cy.wait('@postAnexo');
    });

    cy.get('[data-cy="menu-salvar"]').click({ force: true });
    cy.wait(3000);
  });

  // ============================================================================
  // TESTE 5: FINALIZAÇÃO E SUBMISSÃO
  // ============================================================================
  it('5. Validação de Pendências e Submissão Final do Edital', function () {
    const dados = this.dados.finalizacao;

    cy.get('[data-cy="finalizacao"]').click({ force: true });

    cy.get('[data-cy="termo-de-aceite"]').click({ force: true });
    cy.get('[data-cy="termo-de-aceite-aceito-box"]').click({ force: true }); 

    cy.get('[data-cy="menu-salvar"]').click({ force: true });
    cy.wait(2000);

    cy.get('[data-cy="menu-verificar-pendencias"]').click({ force: true });
    cy.wait('@getPendencias');

    cy.get('[data-cy="menu-finalizar"]').should('not.be.disabled').click({ force: true });
    cy.wait('@postSubmeterProposta');

    cy.contains(new RegExp(dados.mensagemSucessoEsperada, 'i'), { timeout: 15000 }).should('be.visible');
  });
});