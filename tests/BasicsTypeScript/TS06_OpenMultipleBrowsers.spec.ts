import { chromium, test } from '@playwright/test';
//Open Two Separate Chrome Browsers
test('Open two separate Chrome browsers', async () => {
  // First browser instance
  const browser1 = await chromium.launch({ headless: false });
  const context1 = await browser1.newContext();
  const page1 = await context1.newPage();
  await page1.goto('https://www.davidjones.com/');
  await page1.waitForTimeout(5000);

  // Second browser instance (completely separate window)
  const browser2 = await chromium.launch({ headless: false });
  const context2 = await browser2.newContext();
  const page2 = await context2.newPage();
  await page2.goto('https://www.google.com/');
  await page2.waitForTimeout(5000);

});
