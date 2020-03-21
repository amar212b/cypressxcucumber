### [Back](../)

## Env

Untuk mempermudah mengganti enviroment test ataupun menyimpan variable yang secret maka perlu membuat file .env

Bisa membuat sendiri atau bisa melakukan copy paste pada file `.env.example`
```sh
$ cp .env.example .env
```

Contoh kita membutuhkan variable untuk url ralali.com, maka kita perlu membuat `RALALI_WEB_URL` beserta value `https://www.ralali.com`
```json
BACKOFFICE_URL=xxx

RALALI_WEB_URL=https://www.ralali.com
```

Di cypress mempunyai fungsi memanggil variable env dengan `Cypress.env('variable')`, kita perlu mengatur plugin cypress terlebih dahulu agar env tersebut bisa di konsumsi cypress.
Plugin berada di `cypress/plugins/index.js`

```js
const cucumber = require('cypress-cucumber-preprocessor').default
require('dotenv').config()

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())

  config.env = config.env || {}
  config.env.BACKOFFICE_URL = process.env.BACKOFFICE_URL
  return config
}
```

Kemudian kita tambahkan env baru tersebut.
```js
const cucumber = require('cypress-cucumber-preprocessor').default
require('dotenv').config()

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())

  config.env = config.env || {}
  config.env.BACKOFFICE_URL = process.env.BACKOFFICE_URL
  config.env.RALALI_WEB_URL = process.env.RALALI_WEB_URL
  return config
}
```

Didalam file step cara kita memanggil.
```js
import { Given } from 'cypress-cucumber-preprocessor/steps'

Given(`I go to ralali website page`, () => {
    cy.visit(Cypress.env('RALALI_WEB_URL'))
})
```
