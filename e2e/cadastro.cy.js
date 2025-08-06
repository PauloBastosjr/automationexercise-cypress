describe('Cadastro de novo usuário', () => {
  it('Deve cadastrar um novo usuário com sucesso', () => {
    cy.visit('https://automationexercise.com');

    cy.contains('Signup / Login').click();

    cy.get('input[data-qa="signup-name"]').type('Paulo QA');
    const email = `paulo.qa${Date.now()}@mail.com`; // E-mail único
    cy.get('input[data-qa="signup-email"]').type(email);
    cy.get('button[data-qa="signup-button"]').click();

    // Preenche os campos obrigatórios
    cy.get('#id_gender1').click();
    cy.get('#password').type('SenhaSegura123');
    cy.get('#days').select('10');
    cy.get('#months').select('May');
    cy.get('#years').select('1990');
    cy.get('#first_name').type('Paulo');
    cy.get('#last_name').type('Bastos');
    cy.get('#address1').type('Rua dos Testes, 123');
    cy.get('#state').type('Braga');
    cy.get('#city').type('Braga');
    cy.get('#zipcode').type('4700000');
    cy.get('#mobile_number').type('910000000');
    cy.get('button[data-qa="create-account"]').click();

    cy.contains('Account Created!').should('be.visible');
  });
});
