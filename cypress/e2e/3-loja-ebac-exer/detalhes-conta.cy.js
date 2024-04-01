/// <reference types="cypress"/>

describe('Funcionalidade: Detalhe da conta', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login =>{
            cy.login(login.usuario, login.senha)
        })
        
        
    });

    it('Deve completar detalhes da conta', () => {
        cy.detalhesdaconta('Lucas', 'Pires', 'lucas.qa')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')
        
    });
});