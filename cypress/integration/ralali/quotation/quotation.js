import { Then } from 'cypress-cucumber-preprocessor/steps'

const buttonQuotation = 'button[id="btn-post-buying-request"'
const nameField = 'input[name="name"]'
const emailField = 'input[name="email"]'
const countryCodeOption = 'select[ng-model="form.country_code"]'
const phoneField = 'input[name="phone"]'
const buttonNext = 'button[ng-click="buyingReq.saveAccountInfo();"]' //not best practices

Then(`I click the button request quotation`, () => {
  cy.get(buttonQuotation).click()
})

Then(`I fill in name field with {string}`, name => {
  cy.get(nameField)
    .type(name)
    .should('have.value', name)
})

Then(`I fill in email field with {string}`, email => {
  cy.get(emailField)
    .type(email)
    .should('have.value', email)
})

Then(`I choose country code with {string}`, countryCode => {
  cy.get(countryCodeOption)
    .select(countryCode)
    .should('have.value', countryCode)
})

Then(`I fill in phone field with {string}`, phone => {
  cy.get(phoneField)
    .type(phone)
    .should('have.value', phone)
})

Then(`I click the button next`, () => {
  cy.get(buttonNext)
    .wait(2000)
    .click() //can't click, because on the page have more than 1 element
})