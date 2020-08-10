const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://components.justanswer.com/v3/comp/re-mu-page-cqa-desktop@0.1.0-dlt-forge-cqa.17?dataSource=http://ww2.justanswer.com/static/nocache/vrt/re-mu-page-cqa-desktop/ready-for-rating.json&local=1',
      show: true,
      windowSize: 'y'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs_hackaton',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}