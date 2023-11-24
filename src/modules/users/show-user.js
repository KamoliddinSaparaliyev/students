const db = require("../../db");
const { NotFoundError } = require("../../shared/error");

module.exports.showUser = async ({ id }) => {
  const user = await db("users")
    .where({ id })
    .select("username", "id", "name", "role")
    .first();

  if (!user) throw new NotFoundError("User not Found");

  return user;
};
