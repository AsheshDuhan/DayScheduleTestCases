const { devices } = require('@playwright/test');

const config = { 

   testDir: './tests',
  
   timeout: 20 * 1000,
  
   expect: {
    
      timeout: 25000
 
    },

  reporter : 'html',
 
  use:{

    browserName : 'chromium',
    headless : false

  },

  }

module.exports = config;
