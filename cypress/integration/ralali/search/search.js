import { Then } from 'cypress-cucumber-preprocessor/steps'

const searchField = 'input[name="search"]'
const thumbnail = 'div[class="thumbnail-container"';

Then(`I search product using keyword {string}`, keyword => {
  cy.server()
  cy.route('GET', '/home/quick-search').as('search')
  cy.get(searchField)
    .type(keyword)
    .type('{enter}')
  cy.wait('@search')
  cy.get('@search').then(xhr => {
    expect(xhr.method).to.eq('GET')
  })
})

Then(`I see the search results with keyword {string}`, keyword => {
  cy.get(thumbnail).should(element => {
    expect(element.text()).to.contain(keyword)
  })
})