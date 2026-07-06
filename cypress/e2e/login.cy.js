/// <reference types="cypress"/>



describe("Login", () => {

    beforeEach(() => {
        cy.visit('/login')
    })

    //Validar login com sucesso
    it('Login com sucesso', () => {
        cy.get('#user').type('testName@test.com')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Login realizado')

    })
    
    //Validar mensagem de e-mail inválido
    it('Email em branco', () => {
        cy.get('#btnLogin').click()
        cy.get('#user')
            .should('have.value', '');

        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', 'E-mail inválido.')
    })

    //Validar mensagem de senha inválida
    it('Senha invalida', () => {
        cy.get('#user').type('testName@test.com')
        cy.get('#password').type('asdfv')
        cy.get('#btnLogin').click()

        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', 'Senha inválida.')

    })

    it('Email inválido', () => {
        cy.get("#user").type("testName.com");
        cy.get("#password").type("testName123");
        cy.get("#btnLogin").click();
        cy.get(".invalid_input");
        cy.should("be.visible").and("contain", "E-mail inválido.");
    })

    it("Senha incorreta", () => {
        cy.get("#user").type("testName@teste.com");
        cy.get("#password").type("rafae");
        cy.get("#btnLogin").click();
        cy.get(".invalid_input");
        cy.should("be.visible").and("contain", "Senha inválida.");
    });

})