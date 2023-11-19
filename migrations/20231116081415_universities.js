exports.up = function (knex) {
  return knex.schema.createTable("universities", function (table) {
    table.increments("id").primary();
    table.string("name");
    table
      .integer("city_id")
      .unsigned()
      .nullable()
      .references("id")
      .inTable("cities");
    table.timestamps(false, false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("universities");
};
