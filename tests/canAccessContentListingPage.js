module.exports = {
  beforeEach: function (browser) {
    browser.login();
  },

  'Can Access Content Page': function (browser) {
    browser
      .url(process.env.BASE_URL + 'admin/content')
      .waitForElementVisible('body', 1000)
      .assert.textContains('.page-title', 'Content')
      .end();
  }
};
