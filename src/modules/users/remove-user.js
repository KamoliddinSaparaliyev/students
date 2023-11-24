const db = require("../../db");
const { showUser } = require("./show-user");

module.exports.removeUser = async ({ id }) => {
  await showUser({ id });

  return await db("users").where({ id }).del();
};
