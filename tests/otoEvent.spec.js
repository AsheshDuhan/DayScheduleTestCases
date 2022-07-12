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
    await addbtn.click();
   
    const btn = "New Event";
    const eventbtn = page.locator('a.dropdown-item');
    const count = await eventbtn.count();
    for(let i=0; i<count; ++i){

        if (await eventbtn.nth(i).locator("i").textContent()==btn)
        {
            await eventbtn.nth(i).locator("text = New Event").click();
            break;
        }

    }
    await page.goto('https://app.dayschedule.in/resources/events/add');
    await page.title();
    console.log(await expect(page).toHaveTitle('Events - DaySchedule'));
});

