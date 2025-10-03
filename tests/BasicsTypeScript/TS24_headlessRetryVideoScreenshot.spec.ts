import { test, expect } from '@playwright/test';

test('Scroll to last product on SauceDemo', async ({ page }) => {
  // Login first
  await page.goto('https://www.saucedemo.com');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Wait for inventory to load
  await expect(page).toHaveURL('https://www.saucedemo.com/inventor.html');
});


// add all of these under playwright.config.ts
//  use: {
//     baseURL: 'https://www.saucedemo.com/',
//     browserName: 'chromium', // Change to firefox or webkit if needed
//     headless: false, // Run tests with UI
//     screenshot: 'on',  // screenshot: 'only-on-failure',
//     video: 'retain-on-failure',
//     trace: 'on',
//     viewport: { width: 1280, height: 720 },
//     retries: 2 //if test fails it will try to run 2 more times
//   }