const db = require("../../db");

module.exports.listUsers = async () => {
  const users = await db("users").select("username", "id", "name", "role");

  return users;
};
