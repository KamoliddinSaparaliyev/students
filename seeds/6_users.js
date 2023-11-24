const bcryptjs = require("bcryptjs");

exports.seed = async function (knex) {
  await knex("users").del();
  await knex("users").insert([
    {
      username: "jonedoe",
      password: bcryptjs.hashSync("password1234", 10),
      name: "Jone Doe",
      role: "ADMIN",
    },
  ]);
};
