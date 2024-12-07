// tests/test.spec.js
const { test, expect } = require("@playwright/test");
const { LoginPage } = require("./pageObjects/loginPage");
const { VALID_CREDENTIALS, INVALID_CREDENTIALS, URLs } = require("./constants");

// Test with valid credentials
test("Login Test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate(URLs.BASE_URL); // Using the BASE_URL constant
  await loginPage.login(VALID_CREDENTIALS.username, VALID_CREDENTIALS.password);
  await expect(page).toHaveURL(URLs.INVENTORY_PAGE); // Using the INVENTORY_PAGE constant
});

// Test with invalid credentials
test("Invalid Login Test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate(URLs.BASE_URL); // Using the BASE_URL constant
  await loginPage.login(
    INVALID_CREDENTIALS[0].username,
    INVALID_CREDENTIALS[0].password
  );

  const errorMessage = await loginPage.getErrorMessage();
  await expect(errorMessage).toBeVisible();
});
