describe("mySuite", function(){
    it("Validate URL",function(){
        browser.get('https://angularjs.org/');
        browser.sleep(5000);
        browser.manage().window().maximize();
        expect(browser.getCurrentUrl()).toBe('https://angularjs.org/');
    });

    it("Validate Title",function(){
        browser.get('https://angularjs.org/');
        browser.sleep(5000);
        browser.manage().window().maximize();
        expect(browser.getTitle()).toBe('AngularJS — Superheroic JavaScript MVW Framework');
    });
});