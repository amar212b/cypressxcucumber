import { Then } from 'cypress-cucumber-preprocessor/steps'

const buttonQuotation = 'button[id="btn-post-buying-request"'
const nameField = 'input[name="name"]'
const emailField = 'input[name="email"]'
const phoneField = 'input[name="phone"]'
const buttonNext = 'button[ng-click="buyingReq.saveAccountInfo();"]' //not best practices

Then(`I click the button request quotation`, () => {
  cy.get(buttonQuotation).click()
})

Then(`I fill in name field with {string}`, name => {
  cy.get(nameField)
    .type(name)
})

Then(`I fill in email field with {string}`, email => {
  cy.get(emailField)
    .type(email)
})

Then(`I fill in phone field with {string}`, phone => {
  cy.get(phoneField)
    .type(phone)
})

Then(`I click the button next`, () => {
  cy.get(buttonNext)
    .wait(2000)
    .click() //can't click, because on the page have more than 1 element
})