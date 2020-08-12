let calcultorHomePage = require('../Pages/calculatorPage.js');
let testData = require('../testData/Global_TestData.json');
let globalActionsPage = require('../Base Class/GlobalActions.js');

//below test uses static data for application url
describe('Demo Calculator Tests', function () {
  it('Addition Test_1', async function () {
    // calcultorHomePage.getUrl(testData.url);
    // calcultorHomePage.getUrl(browser.params.url);
    globalActionsPage.getUrl(browser.params.url);
    console.log(testData.url);
    browser.sleep(2000);
    calcultorHomePage.enterFirstNumber('5');
    calcultorHomePage.enterSecondNumber('4');
    calcultorHomePage.clickGo();
    browser.sleep(2000);
    calcultorHomePage.verifyResult('9');
  });

  //below spec uses global data
  it('Addition Test_2', function () {
    globalActionsPage.getUrl(browser.params.url);
    // calcultorHomePage.getUrl('http://juliemr.github.io/protractor-demo/');
    browser.sleep(2000);
    calcultorHomePage.enterFirstNumber(testData.Addition_Test2.input1);
    calcultorHomePage.enterSecondNumber(testData.Addition_Test2.input2);
    calcultorHomePage.clickGo();
    browser.sleep(2000);
    calcultorHomePage.verifyResult(testData.Addition_Test2.result);
  });

});