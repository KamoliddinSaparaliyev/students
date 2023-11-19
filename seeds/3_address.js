exports.seed = async function (knex) {
  await knex("address").del();
  await knex("address").insert([
    {
      street: "Farg'ona yo'li 12",
      postal_code: "12345",
      city_id: 1,
      district_id: 1,
    },
    {
      street: "Amir Temur 34",
      postal_code: "101211",
      city_id: 2,
      district_id: 2,
    },
    { street: "Babur 127", postal_code: "122112", city_id: 3, district_id: 3 },
  ]);
};
