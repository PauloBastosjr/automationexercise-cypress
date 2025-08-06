describe('Logout do usuário', () => {
    it('Deve fazer login e depois logout com sucesso', () => {
        cy.visit('https://automationexercise.com');

        //Acessa a tela de login
        cy.contains('Signup / Login').click();

        //Faz login com usuário fixo
        cy.get('[data-qa="login-email"]').type('paulo.qa.teste@gmail.com');
        cy.get('[data-qa="login-password"]').type('SenhaForte123!');
        cy.get('[data-qa="login-button"]').click();

        //Confirma que o login foi realizado
        cy.contains('Logged in as').should('be.visible');

        //Clica em "logout"
        cy.contains('Logout').click();

        //Verifica se voltou pra tela de login
        cy.url().should('include', '/login');
        cy.contains('Login to your account').should('be.visible');

    })
})