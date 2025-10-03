import { test, expect } from '@playwright/test';

// All elements have same attirbues how to handle?
test('Scroll to last product on SauceDemo', async ({ page }) => {
  // Login first
  await page.goto('https://echoecho.com/htmlforms09.htm');

//   //Check if a checkbox is checked/unchecked
  const checkboxes = page.locator('input[name="Checkbox"]');
  await checkboxes.nth(0).check();   // check first
  await checkboxes.nth(1).uncheck(); // uncheck second (was checked)
  await checkboxes.nth(2).check();   // check third

  //Check if a checkbox is checked/unchecked
   const checkboxes1 = page.locator('input[name="Checkbox"]');
//    await checkboxes1.nth(0).check();   // check first
//    expect(checkboxes1).toBeChecked();

//      //by click on same checkbox we are unchecking it
//   //verify if first checkbox is un-checked 
//    await checkboxes.nth(0).uncheck(); 
//   expect(checkboxes1.nth(0)).not.toBeChecked(); 

  //using a loop for Dynamically verifying  checked or unchecked
  const checkboxCount= await checkboxes1.count()
  for(let i=0; i<checkboxCount;i++){
  const checkbox = checkboxes1.nth(i);
//   checkboxes1.nth(i).check();
  const isChecked = await checkbox.isChecked();
    if(isChecked){
    await expect(checkbox).toBeChecked();
     } else {
    await expect(checkbox).not.toBeChecked();
  }
}
});
