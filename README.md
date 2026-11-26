# Testes E2E Web com Cypress

[![Testes E2E](https://github.com/maimotta/qapro-cypressweb/actions/workflows/e2e-tests.yml/badge.svg)](https://github.com/maimotta/qapro-cypressweb/actions/workflows/e2e-tests.yml)

Projeto de automação de testes end-to-end de interface web usando [Cypress](https://www.cypress.io/) e o padrão **Page Objects**, aplicado ao site de prática [automationpratice.com.br](https://www.automationpratice.com.br/).

São 25 cenários cobrindo os fluxos de **login**, **cadastro de usuário** e **checkout**, incluindo caminhos felizes, campos obrigatórios e validação de formato.

## Tecnologias

- [Cypress](https://www.cypress.io/) 15
- JavaScript / Node.js
- Padrão Page Objects
- GitHub Actions (execução automática a cada push e pull request)

## Cenários cobertos

### Login (`login.cy.js`): 5 cenários
- Login com sucesso
- E-mail em branco
- E-mail com formato inválido
- Senha inválida e senha incorreta

### Cadastro de usuário (`cadastro-usuario.cy.js`): 6 cenários
- Cadastro com sucesso
- Nome, e-mail e senha obrigatórios
- E-mail com formato inválido
- Senha com menos de 6 dígitos

### Checkout (`checkout.cy.js`): 14 cenários
- Pedido concluído com as três formas de pagamento: Direct Bank Transfer, Mobile Banking e Paypal
- Obrigatoriedade de cada campo do formulário (nome, sobrenome, empresa, e-mail, país, cidade, CEP, endereço e observações)
- E-mail com formato inválido (sem `@` e sem `.` no domínio)

## Estrutura do projeto

```
cypress/
├── e2e/                   # Specs de teste, um arquivo por funcionalidade
├── estudos/               # Exercícios de estudo dos comandos básicos (não rodam na suíte)
└── support/
    ├── commands.js        # Comando customizado cy.login()
    └── pages/             # Page Objects
        ├── loginPage.js
        ├── cadastroUsuarioPage.js
        └── checkoutPage.js
cypress.config.js          # baseUrl do site
```

### Boas práticas aplicadas

- **Page Objects**: seletores e ações de cada tela ficam isolados em uma classe, deixando os testes legíveis e fáceis de manter.
- **Métodos encadeáveis** (*fluent interface*): cada ação retorna a própria página, então o teste se lê como um passo a passo:

  ```js
  checkoutPage
    .preencherFormulario({ email: '' })
    .enviarCheckout()
    .validarErro('O campo E-mail deve ser prenchido ou é inválido')
  ```
- **Dados padrão sobrescrevíveis**: o formulário de checkout é preenchido com dados válidos por padrão, e cada teste altera só o campo que quer validar.
- **Comando customizado** `cy.login()` reutilizado como pré-condição.
- **Integração contínua**: os testes rodam no GitHub Actions a cada alteração.

## Como executar

Pré-requisito: [Node.js](https://nodejs.org/) 20 ou superior.

```bash
# Instalar as dependências
npm install

# Rodar todos os testes em modo headless
npm test

# Abrir a interface do Cypress
npm run cy:open
```

## Autora

**Maiara Motta**
