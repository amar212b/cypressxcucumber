const report = require('multiple-cucumber-html-reporter')

const os = require('os')

const deviceName = os.platform()

let deviceIcon

if (deviceName === 'darwin') {
  deviceIcon = 'osx'
} else if (deviceName === 'win32') {
  deviceIcon = 'windows'
} else if (deviceName === 'linux') {
  deviceIcon = 'linux'
}

const d = new Date()
const date = `${d.getDate()}-${d.getMonth() +
  1}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`

report.generate({
  jsonDir: 'cypress/reports/results/',
  reportPath: 'cypress/reports/',
  openReportInBrowser: false,
  screenshotsDirectory: 'cypress/screenshots',
  storeScreenshots: true,
  metadata: {
    browser: {
      name: 'chrome',
      version: '80',
    },
    device: os.hostname(),
    platform: {
      name: deviceIcon,
      version: os.release(),
    },
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Apps', value: 'Fintech Backoffice' },
      { label: 'Release', value: '-' },
      { label: 'Date Time', value: date },
    ],
  },
})
