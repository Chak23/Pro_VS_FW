let studentPage = function(){
    let txtName = element(by.name("name"));
    let txtContact = element(by.name("contact"));
    let drpSubject = element(by.name("subject"));
    let txtMarks = element(by.name("marks"));
    let btnSubmit = element(by.css("input[value=Submit"));

    this.get = function(url)  {
        browser.get(url);
    }

    this.setName = function(name) {
        txtName.sendkeys(name);
    }

    this.setContact = function(contact) {
        txtContact.sendkeys(contact);
    }

    this.setSubject = function(sub) {
        drpSubject.element(by.xpath("//option[contains(text(), '"+sub+"')]")).click();
    }

    this.setMarks = function(marks) {
        txtMarks.sendkeys(marks);
    }

    this.clickSubmit = function() {
        btnSubmit.click();
    }

    this.verifyResult = function(name, contact, sub, marks) {
        let rows = element.all(by.tagName('tr'));
        rows.get(0).element(by.xpath("//td[2]")).getText().toBe(name);
        rows.get(0).element(by.xpath("//td[3]")).getText().toBe(contact);
        rows.get(0).element(by.xpath("//td[4]")).getText().toBe(sub);
        rows.get(0).element(by.xpath("//td[5]")).getText().toBe(marks);
    }

};

module.exports = new studentPage();