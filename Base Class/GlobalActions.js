var EC = protractor.ExpectedConditions;

let globalActions = function(){

    this.getUrl = async function (url) {
        await browser.get(url);
        browser.driver.manage().window().maximize();
    };

    this.getPageTitle = async function(){
        await browser.getTitle().then(async function(title){
            console.log("Web page title is : " +title )
        })
    }
    
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

    this.isElementDisplayed = async function(element){
        await element.isDisplayed().then(function(displayFlag){
			console.log("Is Element Displayed : "+displayFlag);
		})
    }

    this.isElementEnabled = async function(element){
        await element.isEnabled().then(function(enabledFlag){
			console.log("Is Element Enabled : "+enabledFlag);
		})
    }

    //For checkboxes, radio buttons and dropdowns
    this.isElementSelected = async function(element){
        await element.isSelected().then(function(selectedFlag){
			console.log("Is Element Selected : "+selectedFlag);
		})
    }

    this.implicitWait = async function(){
        await browser.manage().timeouts().implicitlyWait(10000);
    }

    this.mouseHover = async function(element){
        browser.manage().timeouts().implicitlyWait(10000);
        await browser.actions().mouseMove(element).perform();
    }

    this.moveDown = async function(element){
        browser.manage().timeouts().implicitlyWait(5000);
        browser.actions().mouseDown(element.getWebElement()).perform()
    }

    this.moveUp = async function(element){
        browser.manage().timeouts().implicitlyWait(5000);
        browser.actions().mouseUp(element.getWebElement()).perform()
    }

    this.elementDragAndDrop = async function(sourceElement, targetElement){
        browser.manage().timeouts().implicitlyWait(10000);
        await browser.actions().dragAndDrop(sourceElement, targetElement).perform();
    }

    this.performClick = async function(element){
        browser.manage().timeouts().implicitlyWait(10000);
		await browser.actions().click(element).perform();
    }

    this.performDoubleClick = async function(element){
        browser.manage().timeouts().implicitlyWait(10000);
		await browser.actions().doubleClick(element).perform();
    }

    

};


module.exports = new globalActions();
