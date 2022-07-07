const {test, expect} = require('@playwright/test');

// Login with invalid user name and in valid passsword

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