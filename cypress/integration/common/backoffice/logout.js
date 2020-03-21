import { Then } from 'cypress-cucumber-preprocessor/steps'

const buttonLogout = 'button[data-testid="logout-button"]'
const buttonLogin = 'button[data-testid="submit-button"]'

Then(`I click button logout`, () => {
  cy.get(buttonLogout).click()
  cy.get(buttonLogin).should(element => {
    expect(element.text()).to.contain('Login')
  })
})
