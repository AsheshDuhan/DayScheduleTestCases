const {test, expect} = require('@playwright/test');

test('create event', async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://app.dayschedule.in/login");

    await page.type('#email', 'ashish.duhan@agenty.com');
    await page.fill('#password', 'Ashi$h2710');
    await page.click("[type='submit']");

    await page.waitForLoadState("networkidle");
    await page.locator(".close").click();
  

    console.log(await page.locator('.nav-item ').allTextContents());

    
    

    await page.title();
    
    await expect(page).toHaveTitle("Resources - DaySchedule");

    let url = "https://app.dayschedule.in/resources";

    if(url){
        console.log("PASS")
    }else{
        console.log("FAIL");
    }
       
    

    await expect(page).toHaveURL("https://app.dayschedule.in/resources");

    const addbtn = page.locator(".col-6 button");

    await addbtn.click();

    await page.locator("text = New Event").click();

    await expect(page).toHaveURL("https://app.dayschedule.in/resources/events/add");

    

    const selectbtn = page.locator("label").first();

    await selectbtn.click();

    // await page.locator('.nav-link.active ').click();
    await page.locator("[name=event_name]").type("Testing");
    await page.locator('[title="Bold"]').click();
    await page.locator('[title="Italic"]').click();
    await page.locator('[title="Underline"]').click();
    
    const description = page.locator(".show-placeholder");
    const description1 = page.locator(".show-placeholder");

    await description.type("One to One");
    // await page.pause();


    await page.keyboard.press('Enter');
    await page.locator('[title="Unordered List"]').click();
    await page.keyboard.type('Test');

    // await page.locator('[title="Ordered List"]').click();
    // await page.keyboard.press('Enter');

    // await page.keyboard.type('OneToOne');
    const color = page.locator(".color-picker ");
    await color.press("Enter");

    // await page.locator("#acb019d13dd9-1");




   

    

    


    
    
    

    
    




    











    

    


});