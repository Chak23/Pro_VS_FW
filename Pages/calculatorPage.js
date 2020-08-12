let globalActionsPage = require('../Base Class/GlobalActions.js');

let calculatorHome = function () {
    let firstNumber =  element(by.model('first'));
    let secondNumber = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

  
    this.enterFirstNumber = function (firstInput) {
        expect(firstNumber.isPresent()).toBe(true);
        firstNumber.sendKeys(firstInput);
    };

    this.enterSecondNumber = function (secondInput) {
        secondNumber.sendKeys(secondInput);
    };

    this.clickGo = function () {
        goButton.click();
    };

    this.verifyResult = function (result) {
        let ouput = element(by.cssContainingText('.ng-binding', result));
        expect(ouput.getText()).toEqual(result);
    };

};

module.exports = new calculatorHome();