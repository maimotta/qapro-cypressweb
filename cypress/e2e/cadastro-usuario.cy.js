/// <reference types="cypress"/>

import cadastroUsuarioPage from '../support/pages/cadastroUsuarioPage'

describe('Cadastro usuario', () => {
  beforeEach(() => {
    cadastroUsuarioPage.visit()
  })

  it('Cadastrar usuario', () => {
    cadastroUsuarioPage
      .preencherFormulario({
        nome: 'Test Name',
        email: 'testName@test.com',
        senha: '123456'
      })
      .submeter()
      .validarCadastroComSucesso()
  })

  it('Verificar nome obrigatório', () => {
    cadastroUsuarioPage
      .preencherFormulario({ email: 'testName@test.com', senha: '123456' })
      .submeter()
      .validarMensagemErro('O campo nome deve ser prenchido')
  })

  it('Verificar email obrigatório', () => {
    cadastroUsuarioPage
      .preencherFormulario({ nome: 'Test Name' })
      .submeter()
      .validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
  })

  it('Verificar email com formato inválido', () => {
    cadastroUsuarioPage
      .preencherFormulario({ nome: 'Test Name', email: 'testName.com', senha: '123456' })
      .submeter()
      .validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
  })

  it('Verificar senha obrigatório', () => {
    cadastroUsuarioPage
      .preencherFormulario({ nome: 'Test Name', email: 'testName@test.com' })
      .submeter()
      .validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
  })

  it('Verificar senha menor', () => {
    cadastroUsuarioPage
      .preencherFormulario({ nome: 'Test Name', email: 'testName@test.com', senha: '12345' })
      .submeter()
      .validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
  })
})