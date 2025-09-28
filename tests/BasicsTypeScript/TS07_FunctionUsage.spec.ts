import { test, expect } from '@playwright/test';
import {login,logout} from '../../utils/authenticateSauceDemo'

test('Login to SauceDemo', async ({ page }) => {
    await login( page,'standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory.html/); // Assert successful login
    await expect(page.locator('.title')).toHaveText('Products');

    //logout -- here we are calling logout function
     await logout(page);
});

    // //default timeout for test is 30sec and each step has individual timeout of 30sec 
    //Each step (like page.click(), page.fill(), page.waitForSelector()) has its own default timeout of 30 seconds (30,000 ms).
    // await page.click('#login-button', { timeout: 10000 }); // wait max 10 seconds for this click
    // we can specifally provide timeout for a particular steps using below steps
    // test('my test', async ({ page }) => {
    // test.setTimeout(60000); // 60 seconds for this test
  // test steps here
// });
