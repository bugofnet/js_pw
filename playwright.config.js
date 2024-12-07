import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests", // Directory containing the test files
  reporter: [
    ["list"], // For readable output in the terminal
    ["allure-playwright"], // Enables Allure reporting
  ],
  use: {
    browserName: "chromium", // Specifies the browser to use (Chromium in this case)
    headless: false, // Runs tests in headless mode (no UI)
    screenshot: "only-on-failure", // Capture screenshots only on test failures
    trace: "on-first-retry", // Record traces if a test fails and retries
  },
});
