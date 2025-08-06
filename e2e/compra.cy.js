describe('Fluxo de compra', () => {
it('Deve fazer login, adicionar um produto no carrinho e prosseguir com a compra', () => {
    cy.visit('https://automationexercise.com');

    //Login
    cy.contains('Signup / Login').click();
    cy.get('[data-qa="login-email"]').type('paulo.qa.teste@gmail.com');
    cy.get('[data-qa="login-password"]').type('SenhaForte123!');
    cy.get('[data-qa="login-button"]').click();

    //Verifica login 
    cy.contains('Logged in as').should('be.visible');

    //Acessa a sessão de produtos
    cy.contains('Products').click();

    //Aguarda os produtos carregarem
    cy.get('.product-image-wrapper').first().trigger('mouseover');
    cy.contains('Add to cart').first().click();

    //Clica em "View cart"
    cy.contains('View Cart').click();

    //Verifica se o produto foi adicionado
    cy.get('.cart_description').should('exist');

    //Clica em "Proceed to checkout"
    cy.contains('Proceed To Checkout').click();

    //Adiciona comentário (Opcional)
    cy.get('textarea[name="message"]').type('Pedido automatizado com Cypress');

    // Clica em "Place Order"
    cy.contains('Place Order').click();

    // Preenche dados de pagamento (dados fictícios)
    cy.get('input[name="name_on_card"]').type('Paulo QA');
    cy.get('input[name="card_number"]').type('4111111111111111');
    cy.get('input[name="cvc"]').type('123');
    cy.get('input[name="expiry_month"]').type('12');
    cy.get('input[name="expiry_year"]').type('2030');

    // Envia o pedido
    cy.contains('Pay and Confirm Order').click();

    // Valida mensagem de sucesso
    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');


});
})