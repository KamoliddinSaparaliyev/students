exports.up = function (knex) {
  return knex.schema.createTable("districts", function (table) {
    table.increments("id").primary();
    table.string("name");
    table.integer("region_id").unsigned().references("id").inTable("regions");
    table.timestamps(false, false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("districts");
};
