/// <reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos.page";


describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Selecionar Itens da lista', () => {
        produtosPage.buscarProdutoLista('Aero Daily Fitness Tee')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')

    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Ajax Full-Zip Sweatshirt'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a pagina do produto', () => {
        produtosPage.visitarProduto('Ariel Roll Sleeve Sweatshirt')
        cy.get('.product_title').should('contain', 'Ariel Roll Sleeve Sweatshirt')

    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarProduto('Ajax Full-Zip Sweatshirt')
        produtosPage.addProdutoCarrinho('M', 'Blue', qtd)

        cy.get('.woocommerce-message').should('contain', qtd + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')


    });

    it.only('Deve adicionar produto ao carrinho com massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[1].tamanho. dados[1].cor. dados[1].quantidade)

            cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)

        })




    });
});