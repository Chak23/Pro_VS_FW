let calcultorHomePage = require('../Pages/calculatorPage.js');

describe('Demo Calculator Tests', function () {
  it('Addition Test_1', function () {
    calcultorHomePage.getUrl('http://juliemr.github.io/protractor-demo/');
    browser.sleep(2000);
    calcultorHomePage.enterFirstNumber('5');
    calcultorHomePage.enterSecondNumber('4');
    calcultorHomePage.clickGo();
    browser.sleep(3000);
    calcultorHomePage.verifyResult('9');
  });

  it('Addition Test_2', function () {
    calcultorHomePage.getUrl('http://juliemr.github.io/protractor-demo/');
    browser.sleep(2000);
    calcultorHomePage.enterFirstNumber('5');
    calcultorHomePage.enterSecondNumber('4');
    calcultorHomePage.clickGo1();
    browser.sleep(2000);
    calcultorHomePage.verifyResult('9');
  });

});