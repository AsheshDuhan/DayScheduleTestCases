const { devices } = require('@playwright/test');

const config = { 

   testDir: './tests',
  
   timeout: 10 * 1000,
  
   expect: {
    
      timeout: 12000
 
    },

  reporter : 'html',
 
  use:{

    browserName : 'chromium',
    headless : false

  },

  }

module.exports = config;
