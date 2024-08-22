exports.command = function() {
  const loginPage = this.page.loginPage();
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;

  loginPage
    .navigate()
    .waitForElementVisible('@usernameInput', 1000)
    .setValue('@usernameInput', username)
    .setValue('@passwordInput', password)
    .click('@submitButton')
    .waitForElementVisible('body', 1000);

  return this;
};