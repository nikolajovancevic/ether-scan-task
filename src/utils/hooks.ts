import {
  BeforeAll,
  Before,
  After,
  setDefaultTimeout,
  AfterAll,
  Status
} from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

setDefaultTimeout(60 * 1000);

let browser: Browser;
let context: BrowserContext;
let page: Page;

BeforeAll(async () => {
  browser = await chromium.launch({
    headless: false
  });
});

Before(async () => {
  context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
  });
  page = await context.newPage();
  await page.goto("https://etherscan.io/register");
});

After(async ({ result }) => {

  // taking screenshot in case test fails
  if (result?.status !== Status.PASSED) {
    await page.screenshot({ path: "report/failed-test.png" });
  }

  await page.close();
  await context.close();
});

AfterAll(async () => {
  if (browser) {
    await browser.close();
  }
});

export { page };
