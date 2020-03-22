#  Boilerplate WEBUI Automation Testing

<img src="cypress/docs/img/cypress_cucumber_logo.png" width="500"/>

> Cypress is a next generation front end testing tool built for the modern web. https://www.cypress.io/

> Cucumber is a software tool used by computer programmers that supports behavior-driven development (BDD). Central to the Cucumber BDD approach is its plain language parser called Gherkin. https://cucumber.io/

### Prerequisites:

- node version `^v12.0.0`
- Install Node.js and npm, we will use npm to install or yarn
- Cypress x Cucumber for automation testing

### How to Getting Started:

```sh
$ git clone "url this project"
$ cd cypress-x-cucumber
$ npm install
$ cp .env.example .env
```

### Data Test
All data test for automation testing

Go to `cypress/data/`

### How to Run:

- use `test-webui` to upload the report on cypress dashboard
- use `cypress` for local testing (not uploading the report)

```sh
$ npm run cypress -- -e TAGS=''
$ npm run cypress -- -e TAGS='not @skip'
$ npm run cypress -- -e TAGS='@tagNameScenario'
$ npm run cypress -- -e TAGS='' --browser chrome
$ npm run cypress-ui
```

### [Documents](cypress)

### Reference
- https://docs.cypress.io/guides/overview/why-cypress.html
- https://cucumber.io/docs/gherkin/
- https://github.com/cucumber/cucumber-js
