class CadastroUsuarioPage {
  visit() {
    cy.visit('/register')
    return this
  }

  preencherFormulario({ nome = '', email = '', senha = '' } = {}) {
    cy.get('#user').clear().type(nome)
    cy.get('#email').clear().type(email)
    cy.get('#password').clear().type(senha)
    return this
  }

  submeter() {
    cy.get('#btnRegister').click()
    return this
  }

  validarCadastroComSucesso() {
    cy.get('#swal2-title').should('be.visible').and('have.text', 'Cadastro realizado!')
    return this
  }

  validarMensagemErro(mensagem) {
    cy.get('#errorMessageFirstName').should('be.visible').and('have.text', mensagem)
    return this
  }
}

export default new CadastroUsuarioPage()
