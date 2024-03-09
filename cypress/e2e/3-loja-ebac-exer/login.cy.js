/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    it('Deve realizar login com sucesso', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username') .type('lucasexer.teste@teste.com.br')
        cy.get('#password') .type('teste@123')
        cy.get('.woocommerce-form > .button') .click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)') .should('contain', 'Olá, lucasexer.teste (não é lucasexer.teste? Sair)')
    });
    
});