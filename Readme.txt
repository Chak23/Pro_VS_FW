************1. Steps to add allure reports************

Step 1 : Install jasmine allure reports plugin from https://www.npmjs.com/package/jasmine...
npm i jasmine-allure-reporter

Step 2 : Add data in conf.js

Step 3 : Run conf.js and check allure-reports are generated

Step 4 : Add allure command line tool from https://www.npmjs.com/package/allure-...
npm i allure-commandline

Step 5 : Run command
allure serve “location of allure-results folder”

************Run Postgres ************
1. In Terminal give the below command and enter.
cd C:\Users\Administrator\Documents\Protractor\helper\util\dbUtil
2. Type below command and hit enter
node postgresUtil.js