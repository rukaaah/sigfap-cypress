import { toCyString } from "../helpers/kebab.helper";

describe("Atividade 1 - Teste de Completar Cadastro do Usuário", () => {
  
  beforeEach(() => {
    // Esses comandos rodam antes de CADA 'it', garantindo a independência exigida pelo professor
    cy.visit("/");

    cy.fixture("criar-conta").then((credenciais) => {
      cy.typeLogin(credenciais.email, credenciais.senha);
    });
    
    cy.url().should("include", "/home");
    cy.get('[data-cy="user-menu"]').should("be.visible").click();
    cy.get('[data-cy="editar-perfil"]').should("be.visible").click();
    cy.url().should("include", "/pesquisador/editar");
  });

  it("Deve preencher os campos da sub-seção 'Endereço' e salvar", () => {
    cy.fixture("completar-cadastro").then((dados) => {
      cy.get('[data-cy="endereco"]').click();

      cy.get('[data-cy="endereco.cep"]').clear().type(dados.cep);
      cy.get('[data-cy="endereco.numero"]').clear().type(dados.numero);

      cy.get('[data-cy="menu-salvar"]').click(); 
      cy.contains(/sucesso/i, { timeout: 10000 }).should("be.visible");
    });
  });

  it("Deve preencher os campos da sub-seção 'Dados Acadêmicos' e salvar", () => {
    cy.fixture("completar-cadastro").then((dados) => {
      cy.get('[data-cy="dados-academicos"]').click();

      cy.get('[data-cy="open-nivel-academico-id"]').click();
      cy.get(`[data-cy="${dados.nivelAcademico}"]`).click();

      cy.get('[data-cy="open-instituicao-id"]').click();
      cy.get(`[data-cy="${dados.instituicao}"]`).click();

      cy.get('[data-cy="menu-salvar"]').click(); 
      cy.contains(/sucesso/i, { timeout: 10000 }).should("be.visible");
    });
  });

it("Deve preencher os campos da sub-seção 'Dados Profissionais' e salvar", () => {
    cy.fixture("completar-cadastro").then((dados) => {
      cy.get('[data-cy="dados-profissionais"]').click();

      // GOLPE DE MESTRE: O Cypress acha o input oculto e dá um .check() forçado.
      // Ele já sabe lidar com idempotência (não desmarca o que já está marcado).
      cy.get('[data-cy="possui-vinculo-institucional"]').check({ force: true });

      // Abre o dropdown
      cy.get('[data-cy="open-tipo-vinculo-institucional"]', { timeout: 5000 })
        .should('be.visible')
        .click({ force: true });
        
      cy.get(`[data-cy="${dados.tipoVinculo}"]`).click({ force: true });

      cy.get('[data-cy="menu-salvar"]').click(); 
      cy.contains(/sucesso/i, { timeout: 10000 }).should("be.visible");
    });
  });

  it("Deve submeter os arquivos na sub-seção 'Documentos Pessoais' e salvar", () => {
    cy.fixture("completar-cadastro").then((dados) => {
      cy.get('[data-cy="documentos-pessoais"]').click();

      cy.get('[data-cy="open-select-categories-usuario-a"]').click();
      cy.get(`[data-cy="${dados.categoriaDocumento}"]`).click();

      cy.intercept('POST', '**/api/anexo/usuario/**').as('uploadDocumento');

      cy.get('input[type="file"]').first().selectFile(`cypress/fixtures/${dados.arquivoComprovante}`, { force: true });

      cy.wait('@uploadDocumento');

      cy.get('[data-cy="menu-salvar"]').click(); 
      cy.contains(/sucesso/i, { timeout: 10000 }).should("be.visible");
    });
  });
});