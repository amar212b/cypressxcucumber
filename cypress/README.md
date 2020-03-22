#  Boilerplate WEBUI Automation Testing

<img src="docs/img/cypress_cucumber_logo.png" width="500"/>

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

## How to Run:

- use `test-webui` to upload the report on cypress dashboard
- use `cypress` for local testing (not uploading the report)

```sh
$ npm run cypress -- -e TAGS=''
$ npm run cypress -- -e TAGS='not @skip'
$ npm run cypress -- -e TAGS='@tagNameScenario'
$ npm run cypress -- -e TAGS='' --browser chrome
```

e.g
```sh
$ npm run cypress -- -e TAGS='@ralaliSearchTest'
```

if you want launch the browser
```sh
$ npm run cypress -- -e TAGS='@ralaliSearchTest' --browser chrome
```

## [How to write](docs/)

## [How to generate report](docs/Report.md)

## [How to add env](docs/Env.md)

## Cypress Desktop

1. You can use node module
```sh
npm run cypress-ui
```

2. Or install the cypress desktop
- https://docs.cypress.io/guides/getting-started/installing-cypress.html

And then open the project

<img src="docs/img/cypress_desktop_run.gif" width="800"/>
