/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve realizar login com sucesso', () => {
        cy.get('#username') .type('lucasexer.teste@teste.com.br')
        cy.get('#password') .type('teste@123')
        cy.get('.woocommerce-form > .button') .click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)') .should('contain', 'Olá, lucasexer.teste (não é lucasexer.teste? Sair)')
        
    });

    it('Deve mostrar uma mensagem de erro ao inserir usário inváldo', () => {
        cy.get('#username') .type('lucase.teste@teste.com.br')
        cy.get('#password') .type('teste@123')
        cy.get('.woocommerce-form > .button') .click()
        cy.get('.woocommerce-error > li') .should('contain', 'Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error > li') .should('exist')

    });

    it('Deve dar erro ao colocar senha inválida', () => {
        cy.get('#username') .type('lucasexer.teste@teste.com.br')
        cy.get('#password') .type('este@123')
        cy.get('.woocommerce-form > .button') .click()
        cy.get('.woocommerce-error > li') .should('contain' ,'Erro: A senha fornecida')
        cy.get('.woocommerce-error > li') .should ('exist')
        
    });

    it('Deve fazer Login com Sucesso com massa de dados', () => {
        cy.get('#username') .type(perfil.usuario)
        cy.get('#password') .type(perfil.senha)
        cy.get('.woocommerce-form > .button') .click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)') .should('contain', 'Olá, lucasexer.teste (não é lucasexer.teste? Sair)')
    });

    it.only('Deve fazer Login com Sucesso com fixture', () => {
        cy.fixture('perfil').then(dados => {
        cy.get('#username') .type(dados.usuario , {log:false})
        cy.get('#password') .type(dados.senha , {log:false})
        cy.get('.woocommerce-form > .button') .click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)') .should('contain', 'Olá, lucasexer.teste (não é lucasexer.teste? Sair)')
        })
    });
    
});