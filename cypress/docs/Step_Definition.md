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
Sudah di define pada file `integration/common/ralali/home.js`
```js
import { Given } from 'cypress-cucumber-preprocessor/steps'

Given(`I go to ralali website page`, () => {
    cy.visit(Cypress.env('RALALI_WEB_URL'))
})
```

## Private
Private hanya di konsumsi untuk satu feature saja, file juga disimpan dalam folder yang sama dengan feature tersebut.
Contoh step pada Search Feature `integration/ralali/search.feature`
```gherkin
    When I search product using keyword "power bank"
    Then I see the search results with keyword "power bank"
```

dan file step dalam folder yang sama dengan feature, serta penamaan folder/file disarankan sama juga.
`integration/ralali/search/search.js`

## [How to write step](Write_Step.md)
