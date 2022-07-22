import { test, expect } from '@playwright/test';

test.describe('click on link', () => {
    test('Should click on link and open a new tab in the same browser', async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        // First Tab
        await page.goto('https://www.rahulshettyacademy.com/loginpagePractise/');

        const websiteLink = page.locator('.blinkingText');
        await expect(websiteLink).toHaveAttribute('class', 'blinkingText');

        // Second tab on d same browser
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            websiteLink.click(),


        ]);

        // Getting text from the second page
        await page.waitForLoadState('networkidle');
        const text: any = await newPage.locator('.red').textContent();
        const domain = await text.split('@')[1].split(' ')[0];
        await page.pause();
        console.log(domain);

        // Back to first page
        const username = page.locator('#username');
        await username.type(domain);

        const password = page.locator('#password');
        await password.fill("learning");
        await page.locator("#signInBtn").click();
        
        
    
        


        // await page.waitForTimeout(5000)
        // console.log(await username.textContent());

        // const password_text :any= page.locator('#login-form .text-center').textContent();
        // const pass = password_text.slice(-9).split(')')[0].split(')')[0];
        // console.log(pass);

        // await page.locator('#password').type('learning');
        // await page.locator('#terms').check();
        // await page.locator('#signInBtn').click();
        
    });
});