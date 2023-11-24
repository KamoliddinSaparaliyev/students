/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("students", function (table) {
    table.increments("id").primary();
    table.string("full_name").notNullable();
    table.integer("age").notNullable();
    table
      .integer("address_id")
      .unsigned()
      .references("id")
      .inTable("address")
      .notNullable();
    table
      .integer("univer_id")
      .unsigned()
      .references("id")
      .inTable("universities")
      .notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("students");
};
