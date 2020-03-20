// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const cucumber = require('cypress-cucumber-preprocessor').default
require('dotenv').config()

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())

  config.env = config.env || {}
  config.env.BACKOFFICE_URL = process.env.BACKOFFICE_URL
  config.env.BACKOFFICE_ADMIN_EMAIL = process.env.BACKOFFICE_ADMIN_EMAIL
  config.env.BACKOFFICE_ADMIN_PASSWORD = process.env.BACKOFFICE_ADMIN_PASSWORD
  config.env.GOOGLE_URL = process.env.GOOGLE_URL
  config.env.RALALI_WEB_URL = process.env.RALALI_WEB_URL
  config.env.EMAIL_BUYER_RALALI = process.env.EMAIL_BUYER_RALALI
  config.env.PASSWORD_BUYER_RALALI = process.env.PASSWORD_BUYER_RALALI
  return config
}
