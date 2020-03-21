import { Given } from 'cypress-cucumber-preprocessor/steps'

Given(`I go to ralali website page`, () => {
    cy.visit(Cypress.env('RALALI_WEB_URL'))
})