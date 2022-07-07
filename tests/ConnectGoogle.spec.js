const {test, expect} = require ('@playwright/test');
// connecting google calender
test('connection' , async({browser}) =>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://app.dayschedule.in/login');

    const connection = page.locator('.nav-link ').nth(3);
    const googleCalender = page.locator('[title="Add new connection"]').first();



    await page.title();
    await expect(page).toHaveTitle('Login - DaySchedule');

    await page.locator('#email').type("ashish.duhan@agenty.com");
    await page.locator("#password").fill("Ashi$h2710");
    await page.locator('button[type="submit"]').click();

    // await page.waitForLoadState("networkidle");
    await page.locator(".close").click();



    await expect(page).toHaveURL('https://app.dayschedule.in/resources');
    await connection.click();



    await  googleCalender.click();
    await page.locator('[type="email"]').type('ashish.duhan@agenty.com');
    await page.locator('.VfPpkd-RLmnJb').nth(1).click();
    await page.pause();

    await page.locator('.whsOnd ').nth(0).type('Ashi$h2710');


    await page.locator('.VfPpkd-RLmnJb').nth(1).click();

    await page.locator(".VfPpkd-RLmnJb").click();

    await expect(page).toHaveURL('https://app.dayschedule.in/connections');
    let calender = connected;
        if("calender = not connected"){
            console.log("fail");
        }else{(console.log("Pass"));
    }

});