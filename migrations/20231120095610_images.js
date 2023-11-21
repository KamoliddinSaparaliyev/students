exports.up = function (knex) {
  return knex.schema.createTable("images", function (table) {
    table.increments("id").primary();
    table.string("filename").notNullable();
    table.string("path").notNullable();
    table.string("mimetype").notNullable();
    table.integer("size").unsigned().notNullable();
    table
      .integer("student_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("students");
    table.timestamps(false, false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("images");
};
