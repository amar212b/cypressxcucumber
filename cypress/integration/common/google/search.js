import { Then, Given, When } from 'cypress-cucumber-preprocessor/steps'

const field = 'input[name="q"]'
const main = 'div[id="main"]'

Given(`I go to google page`, () => {
    cy.visit(Cypress.env('GOOGLE_URL'))
})

Then(`I fill in search field with {string}`, keyword => {
    cy.get(field)
      .type(keyword)
      .type('{enter}')
})

When(`I click the button search`, () => {
    cy.get(field).submit()
})

Then(`I see the results {string}`, results => {
    cy.get(main).should(element => {
      expect(element.text()).to.contain(results)
    })
})