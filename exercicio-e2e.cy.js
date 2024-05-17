/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

import produtosPage from "../support/page_objects/produtos.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

beforeEach(() => {
cy.visit('produtos/')
});

it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
//TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizaçõe

});

it('Colocar itens no carrinho', () => {
let qtd = 4
produtosPage.buscarProdutos('Ajax Full-Zip Sweatshirt')
produtosPage.adicionarProduto('M', 'Blue', qtd)

cy.get('.woocommerce-message').should('contain', qtd + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')

produtosPage.buscarProdutos('Aero Daily Fitness Tee')
produtosPage.adicionarProduto('XS', 'Black', qtd)

cy.get('.woocommerce-message').should('contain', qtd + ' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')

produtosPage.buscarProdutos('Strike Endurance Tee')
produtosPage.adicionarProduto('L', 'Red', qtd)

cy.get('.woocommerce-message').should('contain', qtd + ' × “Strike Endurance Tee” foram adicionados no seu carrinho.')

produtosPage.buscarProdutos('Apollo Running Short')
produtosPage.adicionarProduto('36', 'Black', qtd)
cy.get('.woocommerce-message').should('contain', qtd + ' × “Apollo Running Short” foram adicionados no seu carrinho.')

cy.get('.woocommerce-message > .button').click()
cy.get('.checkout-button').click()
cy.get('#billing_first_name').type('Lucas')
cy.get('#billing_last_name').type('Pires')
cy.get('#billing_address_1').type(faker.location.street())
cy.get('#billing_city').type(faker.location.city())
cy.get('#billing_postcode').type('06234-50')
cy.get('#billing_phone').type('11999908765')
cy.get('#billing_email').type(faker.internet.email())
cy.get('#createaccount').click()
cy.get('#account_password').type('Teste@123')
cy.get('#payment_method_cod').click()
cy.get('#terms').click()
cy.get('#place_order').click()


});
})
