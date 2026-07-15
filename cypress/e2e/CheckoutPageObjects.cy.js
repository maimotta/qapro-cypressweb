// @type cypress

import checkoutPage from '../support/pages/checkoutPage'

describe('Checkout', () => {
  beforeEach(() => {
    cy.login()
    checkoutPage.visit()
  })

  it('01 - Checkout com sucesso - Direct Bank Transfer', () => {
    checkoutPage
      .preencherFormulario()
      .enviarCheckout()
      .validarMensagemBilling()
      .confirmarPedido()
      .validarMensagemPedido()
  })

  it('02 - Checkout com sucesso - Mobile Banking', () => {
    checkoutPage
      .preencherFormulario()
      .enviarCheckout()
      .validarMensagemBilling()
      .selecionarPagamento('mobile')
      .confirmarPedido()
      .validarMensagemPedido()
  })

  it('03 - Checkout com sucesso - Paypal', () => {
    checkoutPage
      .preencherFormulario()
      .enviarCheckout()
      .validarMensagemBilling()
      .selecionarPagamento('paypal')
      .confirmarPedido()
      .validarMensagemPedido()
  })

  it ('04 - Validar Obrigadoriedade do campo nome', () => {
      checkoutPage.preencherFormulario({ firstName: "" })
      checkoutPage.enviarCheckout()
      checkoutPage.validarErro('O campo First Name deve ser prenchido')
  })

  it('05 - Validar Obrigadoriedade do campo sobrenome', () => {
    checkoutPage
      .preencherFormulario({ lastName: '' })
      .enviarCheckout()
      .validarErro('O campo Last Name deve ser prenchido')
  })

  it('06 - Validar Obrigadoriedade do campo Company Name', () => {
    checkoutPage
      .preencherFormulario({ company: '' })
      .enviarCheckout()
      .validarErro('O campo Company deve ser prenchido')
  })

  it('07 - Validar Obrigadoriedade do campo Email', () => {
    checkoutPage
      .preencherFormulario({ email: '' })
      .enviarCheckout()
      .validarErro('O campo E-mail deve ser prenchido ou é inválido')
  })

  it('08 - Validar Obrigadoriedade do campo País', () => {
    checkoutPage
      .preencherFormulario({ country: '' })
      .enviarCheckout()
      .validarErro('O campo Country deve ser prenchido')
  })

  it('09 - Validar Obrigadoriedade do campo State/City', () => {
    checkoutPage
      .preencherFormulario({ city: '' })
      .enviarCheckout()
      .validarErro('O campo City deve ser prenchido')
  })

  it('10 - Validar Obrigadoriedade do campo Zip Code', () => {
    checkoutPage
      .preencherFormulario({ zip: '' })
      .enviarCheckout()
      .validarErro('O campo Zip Code deve ser prenchido')
  })

  it('11 - Validar Obrigadoriedade do campo Full Adress', () => {
    checkoutPage
      .preencherFormulario({ address: '' })
      .enviarCheckout()
      .validarErro('O campo Address deve ser prenchido')
  })

  it('12 - Validar Obrigadoriedade do campo Additional Notes', () => {
    checkoutPage
      .preencherFormulario({ notes: '' })
      .enviarCheckout()
      .validarErro('O campo Additional Notes deve ser prenchido')
  })

  it('13 - Email com formato inválido - Sem @', () => {
    checkoutPage
      .preencherFormulario({ email: 'maiara.com' })
      .enviarCheckout()
      .validarErro('O campo E-mail deve ser prenchido ou é inválido')
  })

  it('14 - Email com formato inválido - Sem . no domíno', () => {
    checkoutPage
      .preencherFormulario({ email: 'maiara@teste' })
      .enviarCheckout()
      .validarErro('O campo E-mail deve ser prenchido ou é inválido')
  })
})