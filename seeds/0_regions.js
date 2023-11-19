exports.seed = async function (knex) {
  await knex("regions").del();
  await knex("regions").insert([
    { name: "Toshkent" },
    { name: "Samarqand" },
    { name: "Andijon" },
  ]);
};
