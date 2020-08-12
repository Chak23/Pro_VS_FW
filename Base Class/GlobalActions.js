let globalActions = function(){

    this.getUrl = async function (url) {
        await browser.get(url);
        browser.driver.manage().window().maximize();
    };

    this.setName = async function(name) {
        await nameInput.sendKeys(name);
      };

    this.enterText = async function(element, inputValue){
        // browser.sleep(500);
        await element.sendkeys(inputValue);
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


};


module.exports = new globalActions();