const puppeteer = require('puppeteer');
const iPhone = puppeteer.devices['iPhone 6'];

(async () => {
  const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
  await page.emulate(iPhone);
  await page.goto('https://www.google.com');
  await browser.sleep(5000);
  await browser.close();
})();