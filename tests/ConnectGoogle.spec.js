const {test, expect} = require ('@playwright/test');
// connecting google calender
test('connection' , async({browser}) =>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://app.dayschedule.in/login');

    const connection = page.locator('.nav-link ').nth(3);
    
    const googleCalender = page.locator('[title="Add new connection"]').first();

    const email =  page.locator('[type="email"]');
    const password =  page.locator("input[type='password']");
    const allow =  page.locator('.VfPpkd-vQzf8d').nth(1);




    await page.title();
    await expect(page).toHaveTitle('Login - DaySchedule');

    await page.locator('#email').type("ashish.duhan@agenty.com");
    await page.locator("#password").fill("Ashi$h2710");
    await page.locator('button[type="submit"]').click();

    await page.waitForLoadState("networkidle");
    await page.locator(".close").click();



    await expect(page).toHaveURL('https://app.dayschedule.in/resources');
    await connection.click();



    await googleCalender.click();

    await email.type("ashish.duhan@agenty.com");

    await page.locator('.VfPpkd-vQzf8d').nth(1).click();

    await page.pause();




    await password.type("Ashi$h2710");
    await page.locator('.VfPpkd-vQzf8d').nth(1).click();

    await allow.click();
    await expect(page).toHaveURL('https://app.dayschedule.in/connections');

    let calender = 'connected';

       
    if("calender = connected"){
            console.log("Pass");
        }else{(console.log("Fail"));
    }


});

test.only("delete conection", async({page})=>{
    await page.goto('https://app.dayschedule.in/login');

    const username = page.locator('#email');
    const signinbtn = page.locator("button[type='submit']");
    const connection = page.locator('.nav-link ').nth(3);
    
    const googleCalender = page.locator('[title="Add new connection"]').first();

    

    await username.type('ashish.duhan@agenty.com');
    await page.locator("#password").fill('Ashi$h2710');

    await signinbtn.press('enter');
    await page.waitForLoadState("networkidle");
    await page.locator(".close").click();

    
    await expect(page).toHaveURL('https://app.dayschedule.in/resources');
    await connection.click();



    await googleCalender.click();


})


  



    

    