class LoginPage {
  visit() {
    cy.visit('/login')
    return this
  }

  preencherCredenciais(email = 'testName@test.com', password = '123456') {
    cy.get('#user').clear().type(email)
    cy.get('#password').clear().type(password)
    return this
  }

  submeter() {
    cy.get('#btnLogin').click()
    return this
  }

  validarMensagemSucesso() {
    cy.get('#swal2-title').should('be.visible').and('have.text', 'Login realizado')
    return this
  }

  validarMensagemErro(mensagem) {
    cy.get('.invalid_input').should('be.visible').and('contain', mensagem)
    return this
  }

  validarCampoEmailVazio() {
    cy.get('#user').should('have.value', '')
    return this
  }
}

export default new LoginPage()
