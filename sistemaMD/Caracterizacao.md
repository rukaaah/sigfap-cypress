Caracterização/
├── Informacões Iniciais
├── Informacões complementares
└── Abrangência

Caracterização
    Informações iniciais
    - Título do edital
    - Título do projeto 
    - Estado de execução do evento(select)
    - Tipo de evento(select)
    - Município de execução do evento (select)
    - Duração do projeto em meses
    - Instituição executora(select)
    - Unidade executora(select)

    Áreas de conhecimento --> Possui botão de adicionar que deve ser clicado para adicionar a Área de conhecimento
    Ao clicar em adicionar será carregado o primeiro campo que também é do tipo select
    - Grande área
    Com o primeiro campo selecionado o segundo campo será carregado que também é do tipo select
    - Área
    Com o segundo campo selecionado o terceiro campo será carregado que também é do tipo select
    - Sub-área
    Com o terceiro campo selecionado o terceiro campo será carregado que também é do tipo select
    - Especialidade
    Ao final deve-se clicar no botão "confirmar" para que a seleção seja add


    A seguir deixarei todos os data-cy dessa página
    const dataCy = ["breadcrumb-voltar", "breadcrumb-home", "notification-menu", "user-menu", "editar-perfil", "usuario-pessoa-juridica", "alterar-senha", "logout", "edital.nome", "titulo", "tipo-evento-id", "search-tipo-evento-id", "open-tipo-evento-id", "close-tipo-evento-id", "workshop", "seminario", "congresso", "estado-execucao-evento", "search-estado-execucao-evento", "open-estado-execucao-evento", "close-estado-execucao-evento", "acre", "alagoas", "amapa", "amazonas", "bahia", "ceara", "distrito-federal", "espirito-santo", "goias", "maranhao", "mato-grosso", "mato-grosso-do-sul", "minas-gerais", "para", "paraiba", "parana", "pernambuco", "piaui", "rio-de-janeiro", "rio-grande-do-norte", "rio-grande-do-sul", "rondonia", "roraima", "santa-catarina", "sao-paulo", "sergipe", "tocantins", "municipio-execucao-evento", "search-municipio-execucao-evento", "open-municipio-execucao-evento", "close-municipio-execucao-evento", "agua-clara", "alcinopolis", "amambai", "anastacio", "anaurilandia", "angelica", "antonio-joao", "aparecida-do-taboado", "aquidauana", "aral-moreira", "bandeirantes", "bataguassu", "bataypora", "bela-vista", "bodoquena", "bonito", "brasilandia", "caarapo", "camapua", "campo-grande", "caracol", "cassilandia", "chapadao-do-sul", "corguinho", "coronel-sapucaia", "corumba", "costa-rica", "coxim", "deodapolis", "dois-irmaos-do-buriti", "douradina", "dourados", "eldorado", "fatima-do-sul", "figueirao", "gloria-de-dourados", "guia-lopes-da-laguna", "iguatemi", "inocencia", "itapora", "itaquirai", "ivinhema", "japora", "jaraguari", "jardim", "jatei", "juti", "ladario", "laguna-carapa", "maracaju", "miranda", "mundo-novo", "navirai", "nioaque", "nova-alvorada-do-sul", "nova-andradina", "novo-horizonte-do-sul", "paraiso-das-aguas", "paranaiba", "paranhos", "pedro-gomes", "ponta-pora", "porto-murtinho", "ribas-do-rio-pardo", "rio-brilhante", "rio-negro", "rio-verde-de-mato-grosso", "rochedo", "santa-rita-do-pardo", "sao-gabriel-do-oeste", "sete-quedas", "selviria", "sidrolandia", "sonora", "tacuru", "taquarussu", "terenos", "tres-lagoas", "vicentina", "duracao", "instituicao-executora-id", "search-instituicao-executora-id", "open-instituicao-executora-id", "close-instituicao-executora-id", "funda-fundacao", "ufms-universidade-federal-do-mat", "ufgd-universidade-federal-da-gra", "uems-universidade-estadual-do-ma", "ufam-universidade-federal-do-ama", "ifam-instituto-federal-do-amazon", "uea-universidade-do-estado-do-am", "usp-universidade-de-sao-paulo", "ufrj-universidade-federal-do-rio", "ufsm-universidade-federal-de-san", "hu-harvard-university", "uja-universidad-de-jaen", "ufsc-universidade-federal-de-san", "mit-massachusetts-institute-of-t", "caltech-california-institute-of", "ufpr-universidade-federal-do-par", "su-stanford-university", "uem-universidade-estadual-de-mar", "ut-universidade-teste", "unidade-executora-id", "search-unidade-executora-id", "open-unidade-executora-id", "close-unidade-executora-id", "facom-faculdade-de-computacao", "faeng-faculdade-de-engenharias-a", "esan-escola-de-administracao-e-n", "fadired-faculdade-de-direito-ufm", "faenged-faculdade-de-engenharia", "grande-area-id", "search-grande-area-id", "open-grande-area-id", "close-grande-area-id", "ciencias-exatas-e-da-terra", "ciencias-biologicas", "engenharias", "ciencias-da-saude", "ciencias-agrarias", "ciencias-sociais-aplicadas", "ciencias-humanas", "linguistica-letras-e-artes", "outra", "area-id", "search-area-id", "open-area-id", "close-area-id", "matematica-area-teste-editada", "matematica-area-teste-editada", "probabilidade-e-estatistica", "ciencia-da-computacao", "astronomia", "fisica", "quimica", "geociencias", "oceanografia", "sub-area-id", "search-sub-area-id", "open-sub-area-id", "close-sub-area-id", "teoria-da-computacao", "matematica-da-computacao", "metodologia-e-tecnicas-da-comput", "sistemas-de-computacao", "especialidade-id", "search-especialidade-id", "open-especialidade-id", "close-especialidade-id", "matematica-simbolica", "modelos-analiticos-e-de-simulaca", "areaDeConhecimento-cancelar", "areaDeConhecimento-confirmar", "caracterizacao", "informacoes-iniciais", "informacoes-complementares", "abrangencia", "coordenacao", "apresentacao", "anexos", "finalizacao", "prev-button", "next-button", "menu-salvar", "menu-verificar-pendencias"];
    

Com isso finalizamos a primeira sub área de "caracterização"
    
    Informações complementares
    - Pergunta Edital 001/2025 - Cypress Edital Completo * (Selecione apenas uma opção)
    - Pergunta Edital 001/2025 - Cypress Edital Completo (Mínimo 10. Máximo 20 caracteres) *

    A seguir estão os data-cy dessa parte
    const dataCy = [
  "breadcrumb-voltar", "breadcrumb-home", "notification-menu", "user-menu",
  "editar-perfil", "usuario-pessoa-juridica", "alterar-senha", "logout",

  "formularioPropostaInformacaoComplementar.pergunta-218-item-grande-faturamento-ano-acima-de",
  "formularioPropostaInformacaoComplementar.pergunta-218-item-media-faturamento-ano-de-r-4-800",
  "formularioPropostaInformacaoComplementar.pergunta-218-item-mei-faturamento-ano-de-ate-r-81",
  "formularioPropostaInformacaoComplementar.pergunta-218-item-micro-faturamento-ano-de-r-81-00",
  "formularioPropostaInformacaoComplementar.pergunta-218-item-pequena-faturamento-ano-de-r-360",
  "formularioPropostaInformacaoComplementar.pergunta-218-item-startup-faturamento-ano-de-ate-r",
  "formularioPropostaInformacaoComplementar.pergunta-218-item-grande-faturamento-ano-acima-de",
  "formularioPropostaInformacaoComplementar.pergunta-218-item-media-faturamento-ano-de-r-4-800",
  "formularioPropostaInformacaoComplementar.pergunta-219",

  "caracterizacao", "informacoes-iniciais", "informacoes-complementares",
  "abrangencia", "coordenacao", "apresentacao", "anexos", "finalizacao",

  "prev-button", "next-button", "menu-salvar", "menu-verificar-pendencias"
];

A seguir estaá a terceira e última subparte de "Caracterização"
Abrangência
Primeiro deve ser clicado no botão "+ Adicionar" para que as opções sejam carregadas
Ao cliar em + Adicionar será carregado o primeiro campo de seleção
- Estado(tipo select)
Ao selecionar o Estado o campo "Município" é carregado
- Município(tipo select)

Ao final deve ser clicado no botão "confirmar"para que a abranngencia seja adicionada

const dataCy = [
  "breadcrumb-voltar", "breadcrumb-home", "notification-menu", "user-menu",
  "editar-perfil", "usuario-pessoa-juridica", "alterar-senha", "logout",

  "estado-id", "search-estado-id", "open-estado-id", "close-estado-id",

  "abrangencia-municipio", "search-abrangencia-municipio",
  "open-abrangencia-municipio", "close-abrangencia-municipio",

  "abrangencia-cancelar", "abrangencia-confirmar",

  "caracterizacao", "informacoes-iniciais", "informacoes-complementares",
  "abrangencia", "coordenacao", "apresentacao", "anexos", "finalizacao",

  "prev-button", "next-button", "menu-salvar", "menu-verificar-pendencias"
];
