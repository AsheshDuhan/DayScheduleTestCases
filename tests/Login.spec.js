const {test, expect} = require('@playwright/test');

// Login with invalid user name and invalid passsword

test('Invalid Inputs', async({browser}) =>{
    

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://app.dayschedule.in/login');

    await page.title();
    await expect(page).toHaveTitle('Login - DaySchedule'); //this assertions shown the page title


    await page.locator('#email').type('qwerty');
    await page.locator('#password').fill('121ss');
    await page.locator("button[type='submit']").click();
    await page.locator('#toast-container').textContent();
    await expect (page.locator('#toast-container')).toContainText('Error'); // this assertions shown the context text which is popup


    let Page = 'Login - DaySchedule' // conditions if it is true or false
    if(Page = 'Login - daySchedule'){
        console.log('incorrect');
    } else {
        console.log('correct');
    }



});

test.only('Valid Inputs', async ({browser})=>{
    // const text = page.locator('.h3:mb-0').nth(1);
    const context = await browser.newContext();
    const page = await context.newPage();
    const link =   page.locator('a.small').first();


    await page.goto('https://app.dayschedule.in/login');
    await page.title();
    await expect(page).toHaveTitle('Login - DaySchedule');

    await page.locator('#email').type('ashish.duhan@agenty.com');
    await page.locator('#password').type('Ashi$h2710');
    await page.locator("button[type='submit']").click();

    await page.waitForLoadState("networkidle");
    

    await page.locator('.close').click();

    await expect(page).toHaveURL('https://app.dayschedule.in/resources');
    await page.title();
    await expect(page).toHaveTitle('Resources - DaySchedule');


    let Page = 'Resources - DaySchedule';
    if(Page = 'Resource - DaySchedule'){
        console.log('Pass')
    }else{
        console.log('Fail');
    };

    await link.click();

    // await expect(page).toHaveURL('https://ashish-agenty.dayschedule.in/'); new window open



   await page.pause();



});