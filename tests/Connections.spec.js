const {test, expect} = require ('@playwright/test');
// clicking on connections
test('connection' , async({browser}) =>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://app.dayschedule.in/login');

    const connection = page.locator('.nav-link ').nth(3);

    await page.title();
    await expect(page).toHaveTitle('Login - DaySchedule');

    await page.locator('#email').type("ashish.duhan@agenty.com");
    await page.locator("#password").fill("Ashi$h2710");
    await page.locator('button[type="submit"]').click();

    await page.waitForLoadState("networkidle");
    await page.locator(".close").click();
    // await page.pause();

    let pageurl = "https://app.dayschedule.in/resources";
    if(pageurl="https://app.dayschedule.in/resources"){
        console.log("PASS");
    }else{
        console.log("Fail");
    }
    await expect(page).toHaveURL("https://app.dayschedule.in/resources");

    await connection.click();

    console.log(await expect(page).toHaveURL("https://app.dayschedule.in/connections"));

    await page.pause();


});