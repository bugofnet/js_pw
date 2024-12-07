// constants.js
module.exports = {
  VALID_CREDENTIALS: {
    username: "standard_user",
    password: "secret_sauce",
  },
  INVALID_CREDENTIALS: [
    { username: "wrongusername", password: "wrongpassword" },
    { username: "locked_out_user", password: "secret_sauce" },
  ],
  URLs: {
    BASE_URL: "https://www.saucedemo.com/",
    INVENTORY_PAGE: "https://www.saucedemo.com/inventory.html",
  },
};
