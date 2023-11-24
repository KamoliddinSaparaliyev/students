const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { NotFoundError, UnauthorizedError } = require("../../shared/error");
const config = require("../../shared/config");
const db = require("../../db");

module.exports.login = async ({ username, password }) => {
  const existingUser = await db("users").where({ username }).first();

  if (!existingUser) {
    throw new NotFoundError("Username or password is incorrect!");
  }

  const isPasswordValid = await bcryptjs.compare(
    "password1234",
    existingUser.password
  );

  if (!isPasswordValid) {
    throw new UnauthorizedError("Username or password is incorrect!");
  }

  const payload = { user: { id: existingUser.id, role: existingUser.role } };
  const token = jwt.sign(payload, config.jwt.secret, { expiresIn: "1h" });

  return { token };
};
