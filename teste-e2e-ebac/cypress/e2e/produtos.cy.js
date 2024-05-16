/// <reference types="cypress" />
import produtosPage from "../support/page-objects/produtos.page";

describe('funcionalidade; produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um item do site', () => {
        produtosPage.buscarProdutoLista('Beaumont Summit Kit')
        cy.get('#tab-title-description > a').should('contain')

    });

    it('Deve buscar Produto', () => {
        let produto = 'Zeppelin Yoga Pant'
        produtosPage.buscarproduto(produto)
        cy.get('product_title').should('contain', produto)
    });

    it('Visitar pagina de Produto', () => {
        produtosPage.visitarProduto('Zeppelin-Yoga-Pant')
        cy.get('product_title').should('contain', 'Zeppelin Yoga Pant')
    });

    it('Deve colocar item no carrinho', () => {
        cy.fixture('produtos').then(dados => {

            produtosPage.buscarProdutos(dados[1].nomeProduto)
            produtosPage.adicionarProduto(dados[1].tamanho, dados[1].cor, dados[1].tamanho)
            cy.get('woocommerce-message').should('contain', dados[1].nomeProduto)
        })

    })
});
