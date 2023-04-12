require("dotenv").config();
const { faker } = require("@faker-js/faker");
const { nanoid, random } = require("nanoid");
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  pool: { min: 0, max: 100 },
});

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const log = (index, total) => {
  if (index % 100 === 0) {
    process.stdout.write(".");
  }

  if (index % 1000 === 0) {
    console.log(`Created: ${index} / ${total}`);
  }
};

const createUsers = async () => {
  for (let index = 0; index < 100000; index++) {
    await knex.table("users").insert({
      username: faker.internet.userName() + nanoid(10),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      email: faker.internet.email(nanoid(10)),
      password: faker.internet.password(),
      user_status: 1,
      created_at: new Date(),
      updated_at: new Date(),
    });

    log(index + 1, 100000);
  }

  console.log("Users done!");
};

const createCategories = async () => {
  for (let index = 0; index < 10000; index++) {
    await knex.table("categories").insert({
      name: capitalize(faker.random.word()),
      created_at: new Date(),
      updated_at: new Date(),
    });

    log(index + 1, 10000);
  }

  console.log("Categories done!");
};

const createTags = async () => {
  for (let index = 0; index < 10000; index++) {
    await knex.table("tags").insert({
      name: capitalize(faker.random.word()),
      created_at: new Date(),
      updated_at: new Date(),
    });

    log(index + 1, 10000);
  }

  console.log("Tags done!");
};

const createBooks = async () => {
  for (let index = 0; index < 100000; index++) {
    await knex.table("books").insert({
      category_id: faker.random.numeric(4),
      name: capitalize(faker.random.words()),
      author: faker.name.fullName(),
      price: faker.commerce.price(),
      created_at: new Date(),
      updated_at: new Date(),
    });
    log(index + 1, 100000);
  }

  console.log("Books done!");
};

const addTagsToBooks = async () => {
  for (let index = 0; index < 300000; index++) {
    await knex.table("book_tags").insert({
      book_id: faker.random.numeric(4),
      tag_id: faker.random.numeric(4),
    });
    log(index + 1, 300000);
  }

  console.log("Book tags done!");
};

const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const ORDER_STATUSES = ["ordered", "approved", "shipped", "delivered"];

const createOrders = async () => {
  for (let index = 0; index < 500000; index++) {
    await knex.table("orders").insert({
      book_id: faker.random.numeric(4),
      user_id: faker.random.numeric(4),
      quantity: faker.random.numeric(1),
      status: ORDER_STATUSES[randomIntFromInterval(0, 3)],
      created_at: new Date(),
      updated_at: new Date(),
    });

    log(index + 1, 500000);
  }

  console.log("Orders done!");
};

const main = async () => {
  for (let index = 1; index < 10; index++) {
    await createUsers();
    await createCategories();
    await createTags();
    await createBooks();
    await addTagsToBooks();
    await createOrders();
  }
  console.log("Done!");
};

main();
