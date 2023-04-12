export const up = function (knex) {
  return knex.schema.createTable("books", function (table) {
    table.increments();
    table.integer("category_id").unsigned().notNullable();
    table.string("name").notNullable();
    table.string("author").notNullable();
    table.double("price").notNullable();
    table.timestamps();

    table
      .foreign("category_id")
      .references("categories.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("books");
};
