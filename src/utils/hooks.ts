import {
  BeforeAll,
  Before,
  After,
  setDefaultTimeout,
  AfterAll,
} from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

setDefaultTimeout(60 * 1000);

let browser: Browser;
let context: BrowserContext;
let page: Page;

BeforeAll(async () => {
  browser = await chromium.launch({
    headless: false,
    args: [
      "--disable-blink-features=AutomationControlled",
      "--disable-web-security",
    ],
  });
});

Before(async () => {
  context = await browser.newContext();
  page = await context.newPage();
  await page.goto("https://etherscan.io/register");
});

After(async () => {
  await page.close();
  await context.close();
});

AfterAll(async () => {
  if (browser) {
    await browser.close();
  }
});

export { page };
