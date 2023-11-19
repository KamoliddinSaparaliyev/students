exports.seed = async function (knex) {
  await knex("students").del();
  await knex("students").insert([
    {
      full_name: "John Doe",
      age: 20,
      address_id: 1,
      univer_id: 1,
    },
    {
      full_name: "Jane Smith",
      age: 22,
      address_id: 2,
      univer_id: 2,
    },
    {
      full_name: "Aliyev Vali",
      age: 21,
      address_id: 3,
      univer_id: 3,
    },
  ]);
};
