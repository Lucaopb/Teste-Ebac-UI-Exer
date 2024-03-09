/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Selecionar Itens da lista', () => {
        cy.get('.products > .row')
        //.first()
        //.last()
        //.eq(3)
        .contains('Argus All-Weather Tank')
        .click()

        cy.get('#tab-title-description > a'). should('contain', 'Descrição')

        cy.get('.button-variable-item-XS').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('exist','foi adicionado no seu carrinho.')
        
    });
});