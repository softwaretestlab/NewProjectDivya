import { test, expect, chromium } from '@playwright/test';

test("AndNor",async()=>{
    let isLoggedIn = false;
    let defaultUser = "Guest";
    let currentUser = isLoggedIn && "John"|| defaultUser
    console.log(currentUser);
    // Explanation: isLoggedIn is false, so "John" is not evaluated. OR (`||`) returns "Guest".

        })