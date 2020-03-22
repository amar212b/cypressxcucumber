import { Then, Given, When } from 'cypress-cucumber-preprocessor/steps'

const emailField = 'input[name="email"]'
const passwordField = 'input[name="password"]'
const msgFail = 'span[ng-bind-html="login.msgfail"]'

Given(`I go to Ralali login page`, () => {
  cy.clearCookies()
  cy.visit(Cypress.env('RALALI_WEB_URL')+'/login')
})

Then(`I go to login using buyer account`, () => {
  cy.server()
  cy.route('POST', '/auth/login').as('login')
  cy.get(emailField)
  .type(Cypress.env('EMAIL_BUYER_RALALI'))
  .type('{enter}')
  cy.get(passwordField)
    .click()
    .type(Cypress.env('PASSWORD_BUYER_RALALI'))
    .type('{enter}')
  cy.wait('@login')
  cy.get('@login').then(xhr => {
    expect(xhr.method).to.eq('POST')
  })
})

Then(`I fill in email field with {string}`, email => {
  cy.get(emailField)
    .type(email)
    .type('{enter}')
})

Then(`I fill in password field with {string}`, password => {
  cy.server()
  cy.route('POST', '/auth/login').as('login')
  cy.get(passwordField)
    .click()
    .type(password)
    .type('{enter}')
  cy.wait('@login')
  cy.get('@login').then(xhr => {
    expect(xhr.method).to.eq('POST')
  })
})

Then(`I see the fail message {string}`, message => {
  cy.get(msgFail).should(element => {
    expect(element.text()).to.contain(message)
  })
})