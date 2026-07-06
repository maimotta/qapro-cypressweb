
/// <reference types="cypress"/>



describe("Cadastro usuario", () => {

    //executa antes de cada teste
     beforeEach(() => {
        cy.visit('/register')
    })

    // cadastro de usuário com todos os campos
    it("Cadastrar usuario", () => {
        cy.get('#user').type('Test Name')
        cy.get('#email').type('testName@test.com')
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click()

        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')

    })

    //verificar campos obrigatórios
    it("Verificar nome obrigatório", () => {
        cy.get('#email').type('testName@test.com')
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo nome deve ser prenchido')
    })

    it("Verificar email obrigatório", () => {
        cy.get('#user').type('Test Name')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    })

    it("Verificar senha obrigatório", () => {
        cy.get('#user').type('Test Name')
        cy.get('#email').type('testName@test.com')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    })

    it("Verificar senha menor", () => {
        cy.get('#user').type('Test Name')
        cy.get('#email').type('testName@test.com')
        cy.get('#password').type('12345')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    })


})