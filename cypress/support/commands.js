// ***********************************************
// Custom commands
// ***********************************************

Cypress.Commands.add('login', (email = 'testName@test.com', password = '123456') => {
  cy.visit('/login')
  cy.get('#user').type(email)
  cy.get('#password').type(password)
  cy.get('#btnLogin').click()
})