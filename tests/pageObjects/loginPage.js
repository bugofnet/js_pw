class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator("input[data-test='username']");
    this.passwordField = page.locator("input[data-test='password']");
    this.loginButton = page.locator("input[data-test='login-button']");
    this.errorMessage = page.locator("h3[data-test='error']");
  }

  async navigate() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async login(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return this.errorMessage;
  }
}

module.exports = { LoginPage };
