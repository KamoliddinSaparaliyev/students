exports.up = function (knex) {
  return knex.schema.createTable("address", function (table) {
    table.increments("id").primary();
    table.string("street");
    table.string("postal_code");
    table
      .integer("city_id")
      .unsigned()
      .nullable()
      .references("id")
      .inTable("cities");
    table
      .integer("district_id")
      .unsigned()
      .references("id")
      .inTable("districts");
    table.timestamps(false, false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("address");
};
