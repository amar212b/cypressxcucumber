### [Back](./)

# Step Definition

Step definition dibuat dalam 2 sifat:
1. Public
2. Private

## Public
Public didalam directory `common`, yang bisa di konsumsi oleh semua file feature.

Contoh untuk step
```gherkin
    Given I go to ralali website page
```
Sudah di define pada file `common/ralali/home.js`
```js
import { Given } from 'cypress-cucumber-preprocessor/steps'

Given(`I go to ralali website page`, () => {
    cy.visit(Cypress.env('RALALI_WEB_URL'))
})
```

## Private
Dan Private hanya di konsumsi untuk satu feature saja, file juga disimpan dalam folder yang sama dengan feature tersebut.
Contoh step pada Search Feature `ralali/search.feature`
```gherkin
    When I search product using keyword "power bank"
    Then I see the search results with keyword "power bank"
```

dan file step dalam folder yang sama dengan feature, serta penamaan folder/file disarankan sama juga.
`ralali/search/search.js`
```js
import { Then, When } from 'cypress-cucumber-preprocessor/steps'

const searchField = 'input[name="search"]'
const thumbnail = 'div[class="thumbnail-container"';

When(`I search product using keyword {string}`, keyword => {
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
```

## [How to write step](Write_Step.md)
