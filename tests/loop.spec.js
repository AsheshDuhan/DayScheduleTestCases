const{test, expect} = require('@playwright/test');

test('event', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://app.dayschedule.in/login');
    const UserName = page.locator("#email");
    const Password = page.locator("#password");
    const LoginBtn = page.locator('[type="submit"]');

    await UserName.fill("ashish.duhan@agenty.com");
    await Password.fill("Ashi$h2710");
    await LoginBtn.click();
    await page.locator('.close');
    await page.waitForLoadState("networkidle");
    // await page.title();
    // await expect(page).toHaveTitle("Event - DaySchedule");
    await page.pause();

    const btnname = 'Add';
    const addbtn = page.locator('[type="button"]');

    const count = await addbtn.count();
    for(let i=0; i<count; ++i)
    {
        if(await addbtn.nth(i).locator("i").textContent() == btnname)
        {
            await addbtn.nth(i).locator("text=New Event").click();
            break;
        }
    }
});