export const up = function (knex) {
  return knex.schema.createTable("orders", function (table) {
    table.increments();
    table.integer("book_id").unsigned().notNullable();
    table.integer("user_id").unsigned().notNullable();
    table.integer("quantity").notNullable().defaultTo(1);
    table
      .enu("status", ["ordered", "approved", "shipped", "delivered"])
      .nullable()
      .index();
    table.timestamps();

    table
      .foreign("book_id")
      .references("books.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table
      .foreign("user_id")
      .references("users.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("orders");
};
