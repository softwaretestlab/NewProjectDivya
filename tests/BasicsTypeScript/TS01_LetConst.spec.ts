import { test, expect, chromium } from '@playwright/test';

test("Variables & Constants",async()=>{
// Allows reassignment of values.
    let age:number =25;  //number
    console.log(age);
    
    let myNewName:string = "STL";  //String
    console.log(myNewName); 

    myNewName = "BTL";
    console.log(myNewName); 

    // Cannot be reassigned after declaration.
    const MyAge: number = 50;         // number
    console.log(MyAge); 
   // MyAge = 51;   //Cannot assign to 'MyAge' because it is a constant
    // console.log(MyAge);

    //boolean
    let isActive:boolean = true;
    console.log(isActive);
    
     age =27;
     console.log(age);

});
