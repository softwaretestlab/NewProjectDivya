import { test, expect } from '@playwright/test';

  test('Valid login should succeed',async ({ page }) => {
 // Login first
  await page.goto(process.env.BASE_URL);
    await page.fill('#user-name', process.env.USERNAME1);
    await page.fill('#password', process.env.PASSWORD);
  await page.click('#login-button');

  // Wait for inventory to load
  await expect(page).toHaveURL('https://www.saucedemo.com/inventor.html');
      });
