export const up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments();
    table.string("username").notNullable().unique().index();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("email").notNullable().unique().index();
    table.string("password").notNullable();
    table.string("phone", 20);
    table.integer("user_status");
    table.timestamps();
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("users");
};
