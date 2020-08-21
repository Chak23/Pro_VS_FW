var EC = protractor.ExpectedConditions;

let globalActions = function(){

    this.getUrl = async function (url) {
        await browser.get(url);
        browser.driver.manage().window().maximize();
    };

    this.setName = async function(name) {
        await nameInput.sendKeys(name);
      };

    this.enterText = async function(element, inputValue){
        await element.sendKeys(inputValue);
    }

    this.click = async function(element)
    {
        await element.click();
    };

    this.clearInput = async function(element)
    {
        await element.clear();
    };

    this.select = async function(element)
    {
        await element.select();
    }

    this.getElementText = function(element)
    {
        return element.getText().then(function (text){
            return text;
        });
    }
    
    this.enableMobile = async function(pageUrl, deviceName){
        const puppeteer = require('puppeteer');
        const devices = require('puppeteer/DeviceDescriptors');

        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.emulate(devices['iPhone 6'])
        await page.goto(pageUrl)
        console.log("Mobile Emulator enabled")
    }


};


module.exports = new globalActions();