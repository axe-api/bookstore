export const up = function (knex) {
  return knex.schema.createTable("book_tags", function (table) {
    table.increments();
    table.integer("book_id").unsigned().notNullable();
    table.integer("tag_id").unsigned().notNullable();

    table
      .foreign("book_id")
      .references("books.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table
      .foreign("tag_id")
      .references("tags.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("book_tags");
};
