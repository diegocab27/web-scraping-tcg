const puppeteer = require("puppeteer");

async function start(){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://www.tcgplayer.com/product/581035/")
    await page.screenshot({path:"cartita.png"})
    await browser.close()
}

start()