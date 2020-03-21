### [Back](../)

# How to write

Cara menulis automation testing code pada cypress dan cucumber, pertama kita hanya focus pada directory `integration`.
Didalam directory integeration kita mempunyai 2 tipe file:

1. File feature cucumber (format .feature)
2. File step definitions (format .js)

## Feature
Feature merupakan bahasa bisnis yang kita gunakan untuk menulis tes dengan cara yang mudah dibaca oleh manusia.
Penulisan test sesuai dengan testcase yang kita buat untuk manual testing. Berisi scenario, dan step-step nya yang mudah dipahami.

```gherkin
@ralaliSearchTest
Feature: Ralali Website - Search

  @positiveTesting
  Scenario: As a User, I should be able to successfully search a product
    Given I go to ralali website page
    When I search product using keyword "power bank"
    Then I see the search results with keyword "power bank"
```

## Step Definition
File step menerjemahkan dari format feature ke script code, yang nanti meminta cypress menjalankan fungsi sesuai perintah yang sudah kita define.

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
