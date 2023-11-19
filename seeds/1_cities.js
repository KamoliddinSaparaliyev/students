exports.seed = async function (knex) {
  await knex("cities").del();
  await knex("cities").insert([
    { name: "Toshkent", region_id: 1 },
    { name: "Samarqand", region_id: 2 },
    { name: "Andijon", region_id: 3 },
  ]);
};
