const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsBuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const { allureCypress } = require('allure-cypress/reporter')

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results"
      });
      const bundler = createBundler({
        plugins: [createEsBuildPlugin(config)],
      });
      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature', 
    baseUrl: 'https://www.newspapers.com', 
    chromeWebSecurity: false,
    pageLoadTimeout: 120000
  },
});
