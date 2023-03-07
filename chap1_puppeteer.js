const puppeteer = require('puppeteer');

const takeSnapShot = async() => {
    // default true
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://www.packtpub.com');
    await page.screenshot({path: 'packt.png'});
    await browser.close();
}

takeSnapShot();