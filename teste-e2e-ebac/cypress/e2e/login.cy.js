/// <reference types="cypress" />
let dadosLogin

const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Login', () => {
    before(() => {
        cy.fixture('perfil').then(perfil => {
            dadosLogin = perfil
        })
    });

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
       
    });

    it('Login com sucesso usando Comando customizado', () => {
        cy.login('lucasexer.teste@teste.com.br', 'teste@123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, lucasexer.teste (não é lucasexer.teste? Sair)')
    });

    it('Login usando fixture', () => {
        cy.fixture('perfil').then(dados => {
        cy.get('#username').type(dados.usuario, { log: false })
        cy.get('#password').type(dados.senha, { log: false })
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, lucasexer.teste (não é lucasexer.teste? Sair)')
        })
        cy.get('.page-title').should('contain', 'Minha conta')
    });

    it.skip('Deve fazer login com sucesso - sem otimização', () => {
        cy.get('#username').type("lucasexer.teste@teste.com.br")
        cy.get('#password').type("teste@123", { log: false })
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
    })

    it('Deve fazer login com massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()   
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, lucasexer.teste (não é lucasexer.teste? Sair)')
        cy.get('.page-title').should('contain', 'Minha conta')
    });
})