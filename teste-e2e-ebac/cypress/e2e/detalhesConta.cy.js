<reference typess="cypress" />

describe('Funcionalidade de detalhes conta', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account/')
        cy.fixture('perfil').then(login => {
        cy.login(login.usuario, login.senha)
        })

    });

    it('deve fazer detalhes da conta com sucesso', () => {
        cy.detalhesConta('Lucas', 'Pires', 'LucaoQa')
        cy.get('woocommer-message').should('contain', 'detalhes da conta modificados com sucesso.')
    });

});

