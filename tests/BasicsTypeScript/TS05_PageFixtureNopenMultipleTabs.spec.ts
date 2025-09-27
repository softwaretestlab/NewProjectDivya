import{chromium, test} from "@playwright/test"

test("NavigatetoWebsite",async()=>{
//inititates chromium and headless false meaning chrome browser will open
const browser=await chromium.launch({headless: false});
//open new session of chrome browser 
//playwright support mutliple context
const context= await browser.newContext();
//default new tab is opened in chrome
const page1 = await context.newPage();
//navigate to webpage
await page1.goto("https://www.davidjones.com/");
await page1.waitForTimeout(10000);

// Handling Multiple Pages or Contexts
// If you want to interact with multiple tabs or browser contexts:

//default new tab is opened in chrome
const page2 = await context.newPage();
//navigate to webpage
await page2.goto("https://www.google.com/");
await page2.waitForTimeout(10000);
})
