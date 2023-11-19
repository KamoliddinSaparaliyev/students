exports.up = function (knex) {
  return knex.schema.createTable("students", function (table) {
    table.increments("id").primary();
    table.string("full_name");
    table.integer("age");
    table.integer("address_id").unsigned().references("id").inTable("address");
    table
      .integer("univer_id")
      .unsigned()
      .references("id")
      .inTable("universities");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("students");
};
