export const up = function (knex) {
  return knex.schema.createTable("categories", function (table) {
    table.increments();
    table.string("name").notNullable();
    table.timestamps();
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("categories");
};
