exports.seed = async function (knex) {
  await knex("districts").del();
  await knex("districts").insert([
    { name: "Yunusobod", region_id: 1 },
    { name: "Samarqand", region_id: 2 },
    { name: "Marhamat", region_id: 3 },
  ]);
};
