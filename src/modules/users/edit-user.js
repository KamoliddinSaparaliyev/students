const db = require("../../db/index");
const bcryptjs = require("bcryptjs");
const { showUser } = require("./show-user");

module.exports.editUser = async ({ id, ...changes }) => {
  await showUser({ id });

  let hashPassword = {};
  if (changes.password)
    hashPassword.password = await bcryptjs.hash(changes.password, 10);

  return (
    await db("users")
      .where({ id })
      .update({ ...changes, ...hashPassword })
      .returning("*")
  )[0];
};
