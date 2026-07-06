/// <reference types="cypress"/>

//it.only para rodar somente um teste
describe("Comandos básicos", () => {

    it("Acessar uma URL", () => {
        cy.visit('http://automationpratice.com.br/login')
    })

    it("Encontrar um elemento", () => {
        //get{} - pegar
        // #user # identifica que o que vem depois é um id
        // .login_submit . identifica que o que vem depois do . é uma classe
        // atenção ao usar classes pois podem ser usadas em mais de um lugar na tela

        cy.visit('http://automationpratice.com.br/login')
        cy.get('#user')
        cy.get('.login_submit')

        //find() - seleciona um elemento
        // para usar o find é preciso diminuir o escopo com o get
        cy.get('.mc-form').find('.form-control')

        //contains() - seleciona um elemento por texto
        // para usar o contains é preciso diminuir o escopo com o get
        cy.get('.mc-form').contains('Send')
    })

    it("Preencher um campo", () => {
        cy.visit('http://automationpratice.com.br/login')
        // para preencher o campo primeiro pega ele com o get e preenche com o type
        cy.get('#user').type('mai@teste.com')
        cy.get('#password').type('123456')
    })

    it("Click", () => {
        cy.visit('http://automationpratice.com.br/login')
        cy.get('#btnRegister').chick()
    })

    it("Select/Dropdown", () => {
        cy.visit('https://automationpratice.com.br/checkout-one')
        //seleciona um elemento em um checkbox na tela por nome ou posição na lista
        cy.get('#country').select('usa')
        cy.get('#country').select('2')
    })

    it("Checkbox/Radio", () => {
        cy.visit('https://automationpratice.com.br/checkout-one')
        //marca ou desmarca checkbox na tela
        cy.get('#materialUnchecked').check()
        cy.get('#materialUnchecked').uncheck()
    })

    it("Validar um elemento", () => {
        cy.visit('http://automationpratice.com.br/login')
        //verifica se o elemento está visivel na tela
        cy.get('#createAccount')
            .should('be.visible')
            .should('have.text', 'Ainda não tem conta?')
    })

    //hooks
    //executa antes de cada it ou seja antes de cada teste
    beforeEach(() => {
        cy.visit('/login')
    })

    // Antes de todos os cenário

    before (() => {
        console.log("Executou antes de tudo")
    })

    //Depois de todos os cenários
    after(() =>{
         console.log("Executou depois de tudo")
    })


    //Depois de cada cenário
     afterEach(() =>{
         console.log("Executou depois de cada cenário")
    })


})