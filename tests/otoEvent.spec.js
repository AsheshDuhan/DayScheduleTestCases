const {test, expect} = require('@playwright/test');
let WebContext;

test.beforeAll( async({browser}) =>{

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://app.dayschedule.in/login');

    await page.type('#email', 'ashish.duhan@agenty.com');
    await page.fill('#password', 'Ashi$h2710');
    await page.click('[type="submit"]');

    await page.waitForLoadState("networkidle");

    await page.click('.close');

    await context.storageState({path:'state.json'});  //when new context created data stored in json path 

    webContext = await browser.newContext({storageSate:'state.json'}); // let webcontext as global variable

});


    test('clicking on event button', async()=>{
        const page = await WebContext.newPage();
        await page.goto('https://app.dayschedule.in/resources');
        
        const addbtn = page.locator('.col-6 button');
        const eventbtn = await page.locator('.dropdown-menu.show a').nth(0);
    
        await addbtn.click();
        await eventbtn.click();
    });
    // const page = await webContext.newPage();
    // await page.goto('https://app.dayschedule.in/resources');

    // const addbtn = page.locator('.col-6 button');
    // await addbtn.click();


    // await page.pause();


