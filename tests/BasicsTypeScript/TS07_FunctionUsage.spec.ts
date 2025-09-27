import { test, expect } from '@playwright/test';
import {login,logout} from '../../utils/authenticateSauceDemo'

test('Login to SauceDemo', async ({ page }) => {
    await login( page,'standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory.html/); // Assert successful login
    await expect(page.locator('.title')).toHaveText('Products');

    //logout -- here we are calling logout function
     await logout(page);

 });   

