// @type cypress

describe("Checkout", () => {

    beforeEach(() => {
        cy.visit('/checkout-one')
    })

    it("01 - Deve realizar o check out com sucesso - Direct Bank Transfer", () => {
        cy.get("#fname").type("Maiara");
        cy.get("#lname").type("Teste");
        cy.get("#cname").type("Lina Corp");
        cy.get("#email").type("maiara@teste.com")
        cy.get('#country').select(1)
        cy.get("#city").select(1)
        cy.get("#zip").type("123456")
        cy.get("#faddress").type("123 Carredon Road")
        cy.get("#messages").type("Nada a declarar")
        cy.get('#materialUnchecked').click()
        cy.get('.checkout-area-bg > .theme-btn-one').click()
        cy.get(':nth-child(2) > h3').should('contain', 'Billings Information registred with success!')
        cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click()
        cy.get('.offer_modal_left > h3').should('contain', 'Congrats! Your order was created with sucess!')

    })

    it("02 - Deve realizar o check out com sucesso - Mobile Banking", () => {
        cy.get("#fname").type("Maiara");
        cy.get("#lname").type("Teste");
        cy.get("#cname").type("Lina Corp");
        cy.get("#email").type("maiara@teste.com")
        cy.get('#country').select(1)
        cy.get("#city").select(1)
        cy.get("#zip").type("123456")
        cy.get("#faddress").type("123 Carredon Road")
        cy.get("#messages").type("Nada a declarar")
        cy.get('#materialUnchecked').click()
        cy.get('.checkout-area-bg > .theme-btn-one').click()
        cy.get(':nth-child(2) > h3').should('contain', 'Billings Information registred with success!')
        cy.get('#headingTwo > .collapsed > [name="payment"]').click()
        cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click()
        cy.get('.offer_modal_left > h3').should('contain', 'Congrats! Your order was created with sucess!')

    })

    it("03 - Deve realizar o check out com sucesso - Paypal", () => {
        cy.get("#fname").type("Maiara");
        cy.get("#lname").type("Teste");
        cy.get("#cname").type("Lina Corp");
        cy.get("#email").type("maiara@teste.com")
        cy.get('#country').select(1)
        cy.get("#city").select(1)
        cy.get("#zip").type("123456")
        cy.get("#faddress").type("123 Carredon Road")
        cy.get("#messages").type("Nada a declarar")
        cy.get('#materialUnchecked').click()
        cy.get('.checkout-area-bg > .theme-btn-one').click()
        cy.get(':nth-child(2) > h3').should('contain', 'Billings Information registred with success!')
        cy.get('#headingThree > .collapsed > label').click()
        cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click()
        cy.get('.offer_modal_left > h3').should('contain', 'Congrats! Your order was created with sucess!')

    })

    it("04 - Deve validar obrigadoriedade dos campos - Nome", () => {
        cy.get("#lname").type("Maiara");
        cy.get("#cname").type("Lina Corp");
        cy.get("#email").type("maiara@teste.com")
        cy.get('#country').select(1)
        cy.get("#city").select(1)
        cy.get("#zip").type("123456")
        cy.get("#faddress").type("123 Carredon Road")
        cy.get("#messages").type("Nada a declarar")
        cy.get('#materialUnchecked').click()
        cy.get('.checkout-area-bg > .theme-btn-one').click()
        cy.get('#errorMessageFirstName').should("contain", "O campo First Name deve ser prenchido")

    })

    it("05 - Deve validar obrigadoriedade dos campos - Sobrenome", () => {
        cy.get("#fname").type("Maiara");
        cy.get("#cname").type("Lina Corp");
        cy.get("#email").type("maiara@teste.com")
        cy.get('#country').select(1)
        cy.get("#city").select(1)
        cy.get("#zip").type("123456")
        cy.get("#faddress").type("123 Carredon Road")
        cy.get("#messages").type("Nada a declarar")
        cy.get('#materialUnchecked').click()
        cy.get('.checkout-area-bg > .theme-btn-one').click()
        cy.get('#errorMessageFirstName').should("contain", "O campo Last Name deve ser prenchido")

    })

    it("06 - Deve validar obrigadoriedade dos campos - Company Name", () => {
        cy.get("#fname").type("Maiara");
        cy.get("#lname").type("Teste");
        cy.get("#email").type("maiara@teste.com")
        cy.get('#country').select(1)
        cy.get("#city").select(1)
        cy.get("#zip").type("123456")
        cy.get("#faddress").type("123 Carredon Road")
        cy.get("#messages").type("Nada a declarar")
        cy.get('#materialUnchecked').click()
        cy.get('.checkout-area-bg > .theme-btn-one').click()
        cy.get('#errorMessageFirstName').should("contain", "O campo Company deve ser prenchido")

    })

    it("07 - Deve validar obrigadoriedade dos campos - Email", () => {
        cy.get("#fname").type("Maiara");
        cy.get("#lname").type("Teste");
        cy.get("#cname").type("Lina Corp");
        cy.get('#country').select(1)
        cy.get("#city").select(1)
        cy.get("#zip").type("123456")
        cy.get("#faddress").type("123 Carredon Road")
        cy.get("#messages").type("Nada a declarar")
        cy.get('#materialUnchecked').click()
        cy.get('.checkout-area-bg > .theme-btn-one').click()
        cy.get('#errorMessageFirstName').should("contain", "O campo E-mail deve ser prenchido ou é inválido")

    })

    it("08 - Deve validar obrigadoriedade dos campos - País", () => {
        cy.get("#fname").type("Maiara");
        cy.get("#lname").type("Teste");
        cy.get("#cname").type("Lina Corp");
        cy.get("#email").type("maiara@teste.com")
        cy.get("#city").select(1)
        cy.get("#zip").type("123456")
        cy.get("#faddress").type("123 Carredon Road")
        cy.get("#messages").type("Nada a declarar")
        cy.get('#materialUnchecked').click()
        cy.get('.checkout-area-bg > .theme-btn-one').click()
        cy.get('#errorMessageFirstName').should("contain", "O campo Country deve ser prenchido")

    })

    it("09 - Deve validar obrigadoriedade dos campos - State/City", () => {
        cy.get("#fname").type("Maiara");
        cy.get("#lname").type("Teste");
        cy.get("#cname").type("Lina Corp");
        cy.get("#email").type("maiara@teste.com")
        cy.get("#country").select(1)
        cy.get("#zip").type("123456")
        cy.get("#faddress").type("123 Carredon Road")
        cy.get("#messages").type("Nada a declarar")
        cy.get('#materialUnchecked').click()
        cy.get('.checkout-area-bg > .theme-btn-one').click()
        cy.get('#errorMessageFirstName').should("contain", "O campo City deve ser prenchido")

    })

    it("10 - Deve validar obrigadoriedade dos campos - Zip Code", () => {
        cy.get("#fname").type("Maiara");
        cy.get("#lname").type("Teste");
        cy.get("#cname").type("Lina Corp");
        cy.get("#email").type("maiara@teste.com")
        cy.get("#country").select(1)
        cy.get("#city").select(1)
        cy.get("#faddress").type("123 Carredon Road")
        cy.get("#messages").type("Nada a declarar")
        cy.get('#materialUnchecked').click()
        cy.get('.checkout-area-bg > .theme-btn-one').click()
        cy.get('#errorMessageFirstName').should("contain", "O campo Zip Code deve ser prenchido")

    })

    it("11 - Deve validar obrigadoriedade dos campos - Full Adress", () => {
        cy.get("#fname").type("Maiara");
        cy.get("#lname").type("Teste");
        cy.get("#cname").type("Lina Corp");
        cy.get("#email").type("maiara@teste.com")
        cy.get("#country").select(1)
        cy.get("#city").select(1)
        cy.get("#zip").type("123456")
        cy.get("#messages").type("Nada a declarar")
        cy.get('#materialUnchecked').click()
        cy.get('.checkout-area-bg > .theme-btn-one').click()
        cy.get('#errorMessageFirstName').should("contain", "O campo Address deve ser prenchido")

    })

    it("12 - Deve validar obrigadoriedade dos campos - Additional Notes", () => {
        cy.get("#fname").type("Maiara");
        cy.get("#lname").type("Teste");
        cy.get("#cname").type("Lina Corp");
        cy.get("#email").type("Maiara@teste.com")
        cy.get('#country').select(1)
        cy.get("#city").select(1)
        cy.get("#zip").type("123456")
        cy.get("#faddress").type("123 Carredon Road")
        cy.get('#materialUnchecked').click()
        cy.get('.checkout-area-bg > .theme-btn-one').click()
        cy.get('#errorMessageFirstName').should("contain", "O campo Additional Notes deve ser prenchido")

    })

    it("13 - Não deve aceitar email com formato inválido - Sem @", () => {
        cy.get("#fname").type("Maiara");
        cy.get("#lname").type("Teste");
        cy.get("#cname").type("Lina Corp");
        cy.get("#email").type("maiara.com")
        cy.get('#country').select(1)
        cy.get("#city").select(1)
        cy.get("#zip").type("123456")
        cy.get("#faddress").type("123 Carredon Road")
        cy.get("#messages").type("Nada a declarar")
        cy.get('#materialUnchecked').click()
        cy.get('.checkout-area-bg > .theme-btn-one').click()
        cy.get('#errorMessageFirstName').should("contain", "O campo E-mail deve ser prenchido ou é inválido")

    })

    it("14 - Não deve aceitar email com formato inválido - Sem . no domíno", () => {
        cy.get("#fname").type("Maiara");
        cy.get("#lname").type("Teste");
        cy.get("#cname").type("Lina Corp");
        cy.get("#email").type("maiara@teste")
        cy.get('#country').select(1)
        cy.get("#city").select(1)
        cy.get("#zip").type("123456")
        cy.get("#faddress").type("123 Carredon Road")
        cy.get("#messages").type("Nada a declarar")
        cy.get('#materialUnchecked').click()
        cy.get('.checkout-area-bg > .theme-btn-one').click()
        cy.get('#errorMessageFirstName').should("contain", "O campo E-mail deve ser prenchido ou é inválido")

    })

})