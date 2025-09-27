import { test, expect } from '@playwright/test';
import {login} from '../../utils/authenticateSauceDemo'

test('Login to SauceDemo', async ({ page }) => {
    await login( page,'standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory.html/); // Assert successful login

 });   

