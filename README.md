# Functional JS Testing for Drupal

There are (https://www.drupal.org/docs/develop/automated-testing/types-of-tests)[different levels of testing], this repo only tests JS within Drupal UI.

## Installation

```
npm install
```

In the root, create a .env file with the following details:

```
USERNAME=your_drupal_username
PASSWORD=your_drupal_password
BASE_URL=https://uat_or_staging_domain.digital/
```

> TO DO: create a dedicated test user?

You can now run `npx nightwatch` which will run through all the tests within the /tests/ folder. 

For individual tests run `npx nightwatch tests/TestFileName.js`

## Structure

/tests/ - individual test files

To prevent repeating code there is a login command stored in /commands/ which calls the page spec from /page_objects/

Then in each test file you just call the login command to run before the test:

```
    beforeEach: function (browser) {
        browser.login();
    },
```

## Reports

A full html report is generated and saved in /tests_output/nightwatch-html-report/ which allows you to click through and inspect tests and logs. 