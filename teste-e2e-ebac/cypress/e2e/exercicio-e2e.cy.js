/// <reference types="cypress" />

import produtosPage from "../../support/page-objects/nome-funcionliada.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

  beforeEach(() => {
    cy.visit('produtos')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    produtosPage.buscarProdutoLista('Aero Daily Fitness Tee')
    cy.get('#tab-title-description > a').should('contain', 'Descrição')
  });

  it('Deve buscar um produto', () => {
    let produto = 'Ajax Full-Zip Sweatshirt'
    produtosPage.buscarProduto(produto)
    cy.get('.product_title').should('contain', produto)
  });

  it('Pagina de produto', () => {
    produtosPage.visitarProduto('Ariel Roll Sleeve Sweatshirt')
    cy.get('.product_title').should('contain', 'Ariel Roll Sleeve Sweatshirt')

  });

  it('Colocar item no carrinho', () => {
    let qtd = 7
    produtosPage.buscarProduto('Ajax Full-Zip Sweatshirt')
    produtosPage.addProdutoCarrinho('M', 'Blue', qtd)

    cy.get('.woocommerce-message').should('contain', qtd + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')

    produtosPage.buscarProduto('Aero Daily Fitness Tee')
    produtosPage.addProdutoCarrinho('XS', 'Black', qtd)

    cy.get('.woocommerce-message').should('contain', qtd + ' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')

    produtosPage.buscarProduto('Strike Endurance Tee')
    produtosPage.addProdutoCarrinho('L', 'Red', qtd)

    cy.get('.woocommerce-message').should('contain', qtd + ' × “Strike Endurance Tee” foram adicionados no seu carrinho.')

    produtosPage.buscarProduto('Apollo Running Short')
    produtosPage.addProdutoCarrinho('36', 'Black', qtd)

    cy.get('.woocommerce-message').should('contain', qtd + ' × “Apollo Running Short” foram adicionados no seu carrinho.')

  });

  it('item no carrinho com massa', () => {
    cy.fixture('produtos').then(dados => {
      produtosPage.buscarProduto(dados[1].nomeProduto)
      produtosPage.addProdutoCarrinho(dados[1].tamanho.dados[1].cor.dados[1].quantidade)

      cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)

    });
  })

})