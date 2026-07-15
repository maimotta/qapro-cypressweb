class CheckoutPage {
  visit() {
    cy.visit('/checkout-one')
    return this
  }


  preencherFormulario(dados = {}) {
    const dadosCompletos = {
      firstName: 'Maiara',
      lastName: 'Teste',
      company: 'Motta Corp',
      email: 'maiara@teste.com',
      country: 1,
      city: 1,
      zip: '123456',
      address: '123 Carredon Road',
      notes: 'Nada a declarar',
      aceitarTermos: true,
      ...dados
    }

    dadosCompletos.firstName && cy.get('#fname').clear().type(dadosCompletos.firstName)
    dadosCompletos.lastName && cy.get('#lname').clear().type(dadosCompletos.lastName)
    dadosCompletos.company && cy.get('#cname').clear().type(dadosCompletos.company)
    dadosCompletos.email && cy.get('#email').clear().type(dadosCompletos.email)
    dadosCompletos.country && cy.get('#country').select(dadosCompletos.country)
    dadosCompletos.city && cy.get('#city').select(dadosCompletos.city)
    dadosCompletos.zip && cy.get('#zip').clear().type(dadosCompletos.zip)
    dadosCompletos.address && cy.get('#faddress').clear().type(dadosCompletos.address)
    dadosCompletos.notes && cy.get('#messages').clear().type(dadosCompletos.notes)

    if (dadosCompletos.aceitarTermos) {
      cy.get('#materialUnchecked').click()
    }
    return this

  }

  enviarCheckout() {
    cy.get('.checkout-area-bg > .theme-btn-one').click()
    return this
  }

  selecionarPagamento(tipo) {
    if (tipo === 'mobile') {
      cy.get('#headingTwo > .collapsed > [name="payment"]').click()
    } else if (tipo === 'paypal') {
      cy.get('#headingThree > .collapsed > label').click()
    }
    return this
  }


  confirmarPedido() {
    cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click()
    return this
  }

  validarMensagemBilling() {
    cy.get(':nth-child(2) > h3').should('contain', 'Billings Information registred with success!')
    return this
  }

  validarMensagemPedido() {
    cy.get('.offer_modal_left > h3').should('contain', 'Congrats! Your order was created with sucess!')
    return this
  }

  validarErro(mensagem) {
    cy.get('#errorMessageFirstName').should('contain', mensagem)
    return this
  }
}

export default new CheckoutPage()
