const {test, expect} = require('@playwright/test');

let WebContext;

test.beforeAll(async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage(); 
    await page.goto('https://app.dayschedule.in/login');
    await page.type('#email', 'ashish.duhan@agenty.com');
    await page.fill('#password', 'Ashi$h2710');
    await page.click("[type='submit']");

    await page.waitForLoadState('networkidle');
    const closebtn = page.locator('.close');
    await closebtn.click();
    await context.storageState({path: 'state.json'});
    WebContext = await browser.newContext({storageState:'state.json'});

});

test('clicking on new event', async()=>{
    const page = await WebContext.newPage();
    await page.goto('https://app.dayschedule.in/resources');
    
    const addbtn = page.locator('.col-6 button');
    const newEvent = await page.locator('.dropdown-menu.show a[href="/resources/services/add"]');

    await addbtn.click();
    await newEvent.click();
});

test('create services', async()=>{
    const page = await WebContext.newPage();
    await page.goto('https://app.dayschedule.in/resources/services/add');

    const businessname = page.locator('input.ng-pristine').nth(0);
    await businessname.type('Hair Style');

    // await page.mouse.down();

    // const location = page.locator('.ng-input').last();
    // const mylocation = page.locator('.media-body').first();
    // // const newlocation = page.locator('.close');
    // const newlocation = page.locator('[name=close]');
    // const newlocation1 = page.locator('.right');

});