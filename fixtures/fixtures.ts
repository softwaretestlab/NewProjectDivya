import { test as base, expect } from '@playwright/test';

// it creates a custom test object by extending playwrihgts built in test behaviour
export const test = base.extend({});

// Global beforeEach — runs before every test that uses this `test`
test.beforeEach(async () => {
  console.log(' Test has started');
});

// Global afterEach — runs after every test that uses this `test`
test.afterEach(async () => {
  console.log(' Test has ended');
});

// Runs once before all tests
test.beforeAll(async () => {
  console.log('Before all tests');
});
// Runs once after all tests
test.afterAll(async () => {
  console.log('After all tests');
});

export { expect };


//test as base --> you are renaming playwright built-in test function to base, so you can extend it. 
//base.extend({}) --> this allows you to define custom fixtures,global setup or shared context
//export const test= .... --> you export he customised test function for use in your test files

//export { expect }; --> allows you to re-expoer playwrights expect from your fixture file so that your test files only need one import