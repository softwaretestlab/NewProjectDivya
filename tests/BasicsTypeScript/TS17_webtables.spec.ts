import { test } from '@playwright/test';

test('Get row and column count from web table', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');

  // Get all column headers
  const headerCells = page.locator('.rt-resizable-header-content');
 const columnCount = await headerCells.count();
 console.log(`Column Count: ${columnCount}`);

   // Get all row count excluding header
    const rows = page.locator('.rt-tr-group .rt-tr');
    const rowCount = await rows.count();
    console.log(`Row Count: ${rowCount}`);

//   //get colum names
//   for (let i = 0; i < columnCount; i++) {
//     //get text of header cell
//      const headerText = await headerCells.nth(i).textContent();
//     console.log(`headerText: ${headerText}`);
//     if(headerText !== null){
//         console.log(`Column ${i + 1} Name: ${headerText.trim()}`);
//      } else {
//     console.log(`Column ${i + 1} Name: (null)`);
//     }

//   }
  //get each cell data and if null then print null
for (let i = 0; i < rowCount; i++) {
        const rowCells = rows.nth(i).locator('.rt-td');

        for (let j = 0; j < columnCount; j++) {
            // Use innerText to ensure empty cells are handled, and trim whitespace
            const cell =rowCells.nth(j);
            const cellText = await cell.textContent();
            if(cellText === null || cellText.trim() == ''){
              console.log(`Row ${i + 1} Column ${j + 1} Data: null`);
            } else {
                console.log(`Row ${i + 1} Column ${j + 1} Data: ${cellText.trim()}`);
            }
        }
    }

});