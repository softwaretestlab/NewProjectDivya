import { test, expect, chromium } from '@playwright/test';

test("Record at cursor",async({page})=>{
//Record at cursor
await page.goto('https://www.saucedemo.com/');
await page.locator('[data-test="username"]').click();
await page.locator('[data-test="username"]').fill('standard_user');
await page.locator('[data-test="password"]').click();
await page.locator('[data-test="password"]').fill('secret_sauce');
await page.locator('[data-test="login-button"]').click();
await expect(page.locator('[data-test="title"]')).toBeVisible();
await expect(page.locator('#react-burger-menu-btn')).toContainText('Open Menu');
});
