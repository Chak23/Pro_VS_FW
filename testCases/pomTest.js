let studentPage = require('../Pages/studentPage')

describe("mysuite", function(){
    it("Add Student Record", function(){
        studentPage.get("http://www.trycatchclasses.com/code/demo/angular4_crud/");
        browser.sleep(3000);
        studentPage.setName("John");
        studentPage.setContact("India");
        studentPage.setSubject("JS");
        studentPage.setMarks("100");
        studentPage.clickSubmit();
        browser.sleep(3000);
        studentPage.verifyResult("John","India","JS","100");
        browser.sleep(3000);

    });
});