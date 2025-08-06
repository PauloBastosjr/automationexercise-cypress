describe('Login de usuário', () => {
  it('Deve fazer login com sucesso usando e-mail fixo', () => {
    cy.visit('https://automationexercise.com');

    // Clica no link "Signup / Login"
    cy.contains('Signup / Login').click();

    // Preenche campos de login
    cy.get('input[data-qa="login-email"]').type('paulo.qa.teste@gmail.com');
    cy.get('input[data-qa="login-password"]').type('SenhaForte123!');

    // Clica no botão "Login"
    cy.get('button[data-qa="login-button"]').click();

    // Verifica se o login foi bem-sucedido
    cy.contains('Logged in as', { timeout: 10000 }).should('be.visible');



  });
});
