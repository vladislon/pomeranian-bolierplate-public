const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

/* [Wczoraj 15.11.2023 21:08] Katarzyna Zofia  Olkowska
const { defineConfig } = require('cypress');
 
module.exports = defineConfig({
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
 */
