import { Given, Then } from "@cucumber/cucumber";
import { page } from "../utils/hooks";
import { expect } from "@playwright/test";

// todo improvements

Given("I enter {string} chars", async function (input: string) {
  if (input == '4') {
    await page.locator('#ContentPlaceHolder1_txtUserName').fill('asdf')
  } else if (input == '35') {
    await page.locator('#ContentPlaceHolder1_txtUserName').fill('qwertyuiopasdfghjklzxcvbnm123456789')
  } else {
    await page.locator('#ContentPlaceHolder1_txtUserName').fill(input)
  }
  // click on another field to trigger the error
  await page.locator('#ContentPlaceHolder1_txtEmail').click()
});

Given("I enter any special char returns error", async function () {
  const specialCharacters = [
    ' ','!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+',
    '[', ']', '{', '}', '\\', '|', ';', ':', '\'', '"', ',', '<', '.', '>',
    '/', '?', '~', '`'
  ];
  
  // checking error for all special chars and space input
  for (let i=0; i<specialCharacters.length; i++) {
    await page.locator('#ContentPlaceHolder1_txtUserName').fill(`asdf${specialCharacters[i]}`)
    // click on another field to trigger the error
    // await page.locator('#ContentPlaceHolder1_txtEmail').click()
    // assert error
    await expect(page.locator('#ContentPlaceHolder1_txtUserName-error')).toHaveText('Only alphanumeric characters allowed.')
    // clear field input
    await page.locator('#ContentPlaceHolder1_txtUserName').clear()
  }
});

Then("Please enter at least 5 characters. error is visible", async function () {
  await expect(page.locator('#ContentPlaceHolder1_txtUserName-error')).toHaveText('Please enter at least 5 characters.')
});

Then("I see only first 30 chars in the username field", async function () {
  await expect(page.locator('#ContentPlaceHolder1_txtUserName')).toHaveValue('qwertyuiopasdfghjklzxcvbnm1234')
});

Then("I clear input", async function () {
  await page.locator('#ContentPlaceHolder1_txtUserName').clear()
});

Then("I see an error", async function () {
  await expect(page.locator('#ContentPlaceHolder1_txtUserName-error')).toHaveText('Please enter Username.')
});