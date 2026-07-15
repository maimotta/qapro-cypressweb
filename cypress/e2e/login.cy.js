/// <reference types="cypress"/>

import loginPage from '../support/pages/loginPage'

describe('Login', () => {
  beforeEach(() => {
    loginPage.visit()
  })

  it('Login com sucesso', () => {
    loginPage
      .preencherCredenciais('testName@test.com', '123456')
      .submeter()
      .validarMensagemSucesso()
  })

  it('Email em branco', () => {
    loginPage
      .submeter()
      .validarCampoEmailVazio()
      .validarMensagemErro('E-mail inválido.')
  })

  it('Senha invalida', () => {
    loginPage
      .preencherCredenciais('testName@test.com', 'asdfv')
      .submeter()
      .validarMensagemErro('Senha inválida.')
  })

  it('Email inválido', () => {
    loginPage
      .preencherCredenciais('testName.com', 'testName123')
      .submeter()
      .validarMensagemErro('E-mail inválido.')
  })

  it('Senha incorreta', () => {
    loginPage
      .preencherCredenciais('testName@teste.com', 'rafae')
      .submeter()
      .validarMensagemErro('Senha inválida.')
  })
})