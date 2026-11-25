class CadastroUsuarioPage {
  visit() {
    cy.visit('/register')
    return this
  }

  preencherFormulario({ nome = '', email = '', senha = '' } = {}) {
    // cy.type() não aceita texto vazio: campos sem valor ficam em branco
    cy.get('#user').clear()
    cy.get('#email').clear()
    cy.get('#password').clear()
    nome && cy.get('#user').type(nome)
    email && cy.get('#email').type(email)
    senha && cy.get('#password').type(senha)
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
