const bcryptjs = require("bcryptjs");
const db = require("../../db");
const { BadRequestError } = require("../../shared/error");

module.exports.addUser = async (payload) => {
  const existing = db("users").where({ username: payload.username }).first();

  if (existing) throw new BadRequestError("username already existit");

  const hashPassword = await bcryptjs.hash(changes.password, 10);

  const newUser = await db("users")
    .insert({ ...payload, password: hashPassword })
    .returning("*");

  return newUser;
};
