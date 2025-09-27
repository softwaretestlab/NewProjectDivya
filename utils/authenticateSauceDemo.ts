import { Page } from '@playwright/test';

export async function login(page: Page, username: string, password: string) {

    await page.goto('https://www.saucedemo.com/');
    // SauceDemo login selectors
    await page.fill('#user-name', username);
    await page.fill('#password', password);
    await page.click('#login-button');
}

export async function logout(page: Page) {
    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');
}