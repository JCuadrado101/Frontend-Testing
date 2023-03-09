const puppeteerHar = require("puppeteer-har");
const puppeteer = require('puppeteer');

const cdp = async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    const har = new puppeteerHar(page);
    await har.start({path: 'results.har'});
    await page.goto('https://www.packetpub.com');
    await har.stop();
}

cdp();