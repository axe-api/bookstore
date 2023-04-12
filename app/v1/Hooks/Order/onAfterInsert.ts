import { Knex } from "knex";
import { IHookParameter, IoCService } from "axe-api";

export default async ({ item, database }: IHookParameter) => {
  await database.table("order_transactions").insert({
    order_id: item.id,
    transaction_type: "ordered",
    created_at: new Date(),
    updated_at: new Date(),
  });
};
