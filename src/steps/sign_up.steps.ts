import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "../utils/hooks";

Given("I enter username", async function () {
  await page.locator('#ContentPlaceHolder1_txtUserName').fill('Tester')
});

Given("I enter email", async function () {
  await page.locator('#ContentPlaceHolder1_txtEmail').fill('test@mailinator.com')
});

Given("I confirm email", async function () {
  await page.locator('#ContentPlaceHolder1_txtConfirmEmail').fill('test@mailinator.com')
});

Given("I enter password", async function () {
  await page.locator('#ContentPlaceHolder1_txtPassword').fill('Test123!')
});

Given("I confirm password", async function () {
  await page.locator('#ContentPlaceHolder1_txtPassword2').fill('Test123!')
});

Given("I check terms checkbox", async function () {
  await page.locator('#ContentPlaceHolder1_MyCheckBox').click()
});

Given("I check newsletter checkbox", async function () {
  await page.locator('#ContentPlaceHolder1_SubscribeNewsletter').click()
});

When("I click Create an Account button", async function () {
  await page.locator('#ContentPlaceHolder1_btnRegister').click()
});

// todo
Given("I navigate to mailinator", async function () {

  await page.locator('#ContentPlaceHolder1_txtUserName').fill('Tester')

});

Then("I click on confrimation link", async function () {
  await page.locator('').click()
});

Then("I sign in", async function () {
 
});
