const { devices } = require('@playwright/test');

const config = { 

   testDir: './tests',
  
   timeout: 15 * 1000,
  
   expect: {
    
      timeout: 18000
 
    },

  reporter : 'html',
 
  use:{

    browserName : 'chromium',
    headless : false

  },

  }

module.exports = config;
