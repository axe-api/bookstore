export const up = function (knex) {
  return knex.schema.createTable("order_transactions", function (table) {
    table.increments();
    table.integer("order_id").unsigned().notNullable();
    table.string("transaction_type").notNullable();
    table.string("description").nullable();
    table.timestamps();

    table
      .foreign("order_id")
      .references("orders.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("order_transactions");
};
