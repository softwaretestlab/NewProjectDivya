import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

//Load the correct .env file based on ENV
// Load the correct .env file based on ENV
dotenv.config({ path: `.env.${process.env.ENV || 'dev'}` });
console.log(`Environment: ${process.env.ENV || 'dev'}`);
console.log(`BASE_URL: ${process.env.BASE_URL}`);
console.log(`USERNAME: ${process.env.USERNAME1}`);
console.log(`PASSWORD: ${process.env.PASSWORD}`);

export default defineConfig({
  testDir: './tests',
  retries: 2, //Retry failed tests up to 2 times
  workers: 4, // Run tests in a single worker
  use: {
    baseURL: process.env.BASE_URL,  // Should correctly load BASE_URL from .env
    browserName: 'chromium', // Change to firefox or webkit if needed
    headless: false, // Run tests with UI
    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'on',
    viewport: { width: 1280, height: 720 } 
  },
   reporter: [['html', { outputFolder: 'reports' }],

    ['list'],  // Default CLI output
    ['allure-playwright'],  // Enable Allure reporting
 ],

  timeout: 90000,
  });
