import { Given } from 'cypress-cucumber-preprocessor/steps'

const fullnameField = 'input[name="name"]'
const emailField = 'input[name="email"]'
const buttonNext = 'button[id="btn-next"]'
const msgFail = 'div[class="text-danger"]'

Given(`I go to register page on ralali website`, () => {
  cy.clearCookies()
  cy.visit(Cypress.env('RALALI_WEB_URL')+'/signup')
})

Then(`I fill in fullname field with {string}`, fullname => {
  cy.get(fullnameField)
    .type(fullname)
})

Then(`I fill in email field with {string}`, email => {
  cy.get(emailField)
    .type(email)
})

When(`I click button next`, () => {
  cy.get(buttonNext)
    .click()
})

Then(`I see the fail message {string}`, message => {
    cy.get(msgFail).should(element => {
      expect(element.text()).to.contain(message)
    })
})

Then(`I can't click the button next`, () => {
    cy.get(buttonNext).should('be.disabled')
})