/// <reference types="cypress" />
let dadosLogin

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

    it.only('Login com sucesso usando Comando customizado', () => {
        cy.login(dadosLogin.usuario, dadosLogin.senha)
        cy.get('.page-title').should('contain', 'Minha conta')
    });

    it('Login usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario, { log: false })
            cy.get('#password').type(dados.senha, { log: false })
            cy.get('.woocommerce-form > .button').click()
            cy.get('.page-title').should('contain', 'Minha conta')
            cy.get('.breadcrumb').should('contain', 'Home / Minha Conta')
            })
    });

    it('Deve fazer login com sucesso - sem otimização', () => {
        cy.get('#username').type('lucasexer.teste@teste.com.br')
        cy.get('#password').type('Teste@123', { log: false })
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, lucasexer.teste (não é lucasexer.teste? Sair)')
    })
})