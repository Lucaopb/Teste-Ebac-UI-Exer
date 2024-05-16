/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit("minha-conta")
    });

    it('Deve realizar cadastro com sucesso', () => {
        cy.get('#reg_email') .type(faker.internet.email())
        cy.get('#reg_password') .type('teste@123')
        cy.get(':nth-child(4) > .button') .click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)') . should('exist', 'Olá, krystel_kulas69')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name') .type(faker.person.firstName())
        cy.get('#account_last_name') .type(faker.person.lastName())
        cy.get('.woocommerce-Button') .click()
        cy.get('.page-title').should('exist', 'MINHA CONTA')
    });

    it.only('Deve fazer cadastro com comando customizado', () => {
        cy.preCadastro.type(faker.internet.email(),'teste@123', faker.person.firstName(), faker.person.lastName())
        cy.get('.page-title').should('exist', 'MINHA CONTA')
    });
    
    it('Deve realizar cadastro com sucesso - Variáveis e erro ao não preecher campos obrigatórios de endereço', () => {
        
        var nome = faker.person.firstName()
        var email = faker.internet.email(nome)
        var sobrenome = faker.person.lastName()


        cy.get('#reg_email') .type(email)
        cy.get('#reg_password') .type('teste@123')
        cy.get(':nth-child(4) > .button') .click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)') . should('exist', 'Olá, krystel_kulas69')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a') .click()
        cy.get('#account_first_name') .type(nome)
        cy.get('#account_last_name') .type(sobrenome)
        cy.get('.woocommerce-Button') .click()
        cy.get('.page-title').should('exist', 'MINHA CONTA')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field')
        cy.get('#select2-billing_country-container').type('Brasil')
        cy.get('#billing_city').type('Osasco')
        cy.get('#select2-billing_state-container').type('São Paulo').click()
        cy.get('#billing_postcode').type('00000001')
        cy.get('#billing_phone').type('011955557070')
        cy.get('.button').click()
        cy.get('#billing_postcode').should('exist','País é um campo obrigatório.')

    });
    
});