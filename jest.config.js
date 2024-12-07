module.exports = {
  preset: "jest-playwright-preset",
  reporters: ["default", ["jest-allure", { outputFolder: "allure-results" }]],
  testEnvironment: "node",
};
