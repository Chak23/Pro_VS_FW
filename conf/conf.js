
// An example configuration file.
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});


exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // multiCapabilities: [
  //   { 'browserName': 'chrome'},
  //   { 'browserName': 'firefox'}
  // ],

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../testCases/calculator.js'],
  // specs: ['../helper/util/dbUtil/postgresUtil.js'],
  
  params: require('../testData/staticTestData.json'),
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  // Setup the report before any tests start - protractor-jasmine2-screenshot-reporter
  beforeLaunch: function () {
    return new Promise(function (resolve) {
      reporter.beforeLaunch(resolve);
    });
  },

  // Assign the test reporter to each running instance
  onPrepare: function () {
    // browser.waitForAngularEnabled(false);
    // browser.ignoreSynchronization = true;

    // helper require function to import page objects - // let calcultorHomePage = requirePO('calculatorPage'); - in specfile
    // global.requirePO = function (relativePath) {
    //   return require(__dirname + '/../Pages/' + relativePath + '.js');
    // };

    // helper require function to import helpers
    // global.requireHelper = function (relativePath) {
    //   return require(__dirname + '/../helpers/' + relativePath + '.js');
    // };

 // Add a screenshot reporter and store screenshots to `/protractorBeautifulReporter/screenshots`: -protractorBeautifulReporter

    let HtmlReporter = require('protractor-beautiful-reporter');
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'protractorBeautifulReporter',
      screenshotsSubfolder: 'screenshotsOnFailure',
      takeScreenShotsOnlyForFailedSpecs: true,
      jsonsSubfolder: 'jsonFiles',
      excludeSkippedSpecs: true,
      preserveDirectory: false,
      clientDefaults: {
        showTotalDurationIn: "header",
        totalDurationFormat: "h:m:s",
        gatherBrowserLogs: true
      },
    }).getJasmine2Reporter());


// Assign the test reporter to each running instance -  Protractor screenshot reporter for Jasmine2
    var jasmineReporters = require('jasmine-reporters');

    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: './',
      filePrefix: 'xmlresults'
    }));

    var fs = require('fs-extra');

    fs.emptyDir('screenshots/', function (err) {
      console.log(err);
    });

    jasmine.getEnv().addReporter({
      specDone: function (result) {
        if (result.status == 'failed') {
          browser.getCapabilities().then(function (caps) {
            var browserName = caps.get('browserName');

            browser.takeScreenshot().then(function (png) {
              var stream = fs.createWriteStream('screenshots/' + browserName + '-' + result.fullName + '.png');
              stream.write(new Buffer(png, 'base64'));
              stream.end();
            });
          });
        }
      }
    });

    //  Assign the test reporter to each running instance -  protractor-jasmine2-screenshot-reporter
    jasmine.getEnv().addReporter(reporter);
// Allure
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
  },

  //in case to run as a suite
  suites : {
    singleTest : ['../testCases/calculator.js'],
    smoke : ['../testCases/calculator.js'],
    regression : []
  },

  // Close the report after all tests finish
  afterLaunch: function (exitCode) {
    return new Promise(function (resolve) {
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },

  //HTMLReport called once tests are finished - protractor html reporter2
  onComplete: function () {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
      browserName = caps.get('browserName');
      browserVersion = caps.get('version');
      platform = caps.get('platform');

      var HTMLReport = require('protractor-html-reporter-2');

      testConfig = {
        reportTitle: 'Protractor Test Execution Report',
        outputPath: './',
        outputFilename: 'ProtractorTestReport',
        screenshotPath: './screenshots',
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true,
        testPlatform: platform
      };
      new HTMLReport().from('xmlresults.xml', testConfig);
    });
  }


};