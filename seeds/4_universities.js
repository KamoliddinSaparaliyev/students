exports.seed = async function (knex) {
  await knex("universities").del();
  await knex("universities").insert([
    {
      name: "National University of Uzbekistan",
      city_id: 1,
    },
    {
      name: "Tashkent State University of Economics Samarkand",
      city_id: 2,
    },
    {
      name: "National University of Andijan",
      city_id: 2,
    },
  ]);
};
