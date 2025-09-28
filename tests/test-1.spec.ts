import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.davidjones.com/');
  await page.getByRole('link', { name: 'SALE', exact: true }).click();
  await page.locator('#header-nav').getByRole('link', { name: 'Designer' }).click();
});