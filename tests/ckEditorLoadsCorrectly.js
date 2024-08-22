module.exports = {
    beforeEach: function (browser) {
        browser.login();
      },
  
    'CKEditor has loaded correctly': function (browser) {
      browser
        .url(process.env.BASE_URL + 'node/add/article')
        .waitForElementVisible('body', 1000)
        .assert.visible('.ck-toolbar__items')
        .end();
    }
  };
  