Playwright JS Training Project
This is a training project using Playwright for browser automation in JavaScript.
The project demonstrates the usage of Playwright for end-to-end testing with the Page Object Model and integration of Allure reports for test results.

Project Setup
Prerequisites
Before running the tests, make sure you have Node.js installed. You can download it from here.

You will also need npm (Node Package Manager), which comes with Node.js.

Install Dependencies:

npm install
This will install Playwright, Allure Command Line, Allure Playwright Reporter, and any other dependencies defined in package.json.

Running the Tests with Allure Reports
You can run the tests and automatically open the Allure report after the tests have finished by using the following command:

npm run test:allure

What Happens When You Run npm run test:allure?

Step 1: The Playwright tests are executed (npx playwright test).
Step 2: After the tests are completed, the Allure report is generated (allure generate allure-results --clean).
Step 3: The generated Allure report is opened automatically in your default web browser (allure open allure-report).
Customizing the Test Command
You can also run the tests separately or perform other tasks by using the following commands:

Run the Playwright tests only:

npm test

This will only execute the tests, but will not generate or open the Allure report.

Generate the Allure report (without running tests):

npm run allure:generate

Open the Allure report (after generating it):
npm run allure:open
