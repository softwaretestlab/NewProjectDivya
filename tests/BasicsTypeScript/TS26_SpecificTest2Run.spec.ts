import { test, expect } from '@playwright/test';

test.describe('Admin Tests', () => {
// this is the only test we will be able to run
test.only('Test A', async ({ page }) => {
  await page.goto('https://echoecho.com/htmlforms09.htm');
  });

test('Test B', async ({ page }) => {
  await page.goto('https://echoecho.com/htmlforms08.htm');
  const text = await page.textContent('h1');

});
});