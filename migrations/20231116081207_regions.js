exports.up = function (knex) {
  return knex.schema.createTable("regions", function (table) {
    table.increments("id").primary();
    table.string("name");
    table.timestamps(false, false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("regions");
};
