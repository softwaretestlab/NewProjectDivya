import { test, expect } from "@playwright/test";

const menuItems = [

    { selector: "#about_sidebar_link", name: "About Page" },
    { selector: "#logout_sidebar_link", name: "Logout" }, 

];

test("Navigate through all Sauce Labs menu items and go back", async ({ page }) => {
    // Open the Sauce Labs login page
    await page.goto("https://www.saucedemo.com/");

    // Perform login
    await page.fill("[data-test='username']", "standard_user");
    await page.fill("[data-test='password']", "secret_sauce");
    await page.click("[data-test='login-button']");
    // Verify successful login
    await expect(page).toHaveURL(/inventory/);

    // Loop through all menu items and click them
    for(const item of menuItems ){
        // Open the sidebar menu
        await page.click("#react-burger-menu-btn");
        //waitForSelector it will wait for default timeout
        await page.waitForSelector(".bm-menu",
           { state: 'visible',
            timeout: 60000 // to specifical provide timeout
        });
        // Ensure menu is visible
         // Verify the dropdown is visible
        const hamburger =page.locator(".bm-menu");
        await expect(hamburger).toBeVisible();

         // Click the menu item
         await page.click(item.selector);
         console.log(`Navigated to ${item.name}`);
        
         // Handle logout separately
         if (item.selector === "#logout_sidebar_link") {
            await expect(page).toHaveURL("https://www.saucedemo.com/");
            console.log("Successfully logged out");
            return; // Stop execution after logout
         }
         // Wait for navigation, then go back
        await page.goBack();              // Navigate back to the previous page
        console.log(`Navigated back from ${item.name}`);
    }


});