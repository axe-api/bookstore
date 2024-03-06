import { AxeRequest, AxeResponse, IoCService } from "axe-api";
import { Knex } from "knex";

export default async (req: AxeRequest, res: AxeResponse) => {
  const db = await IoCService.use<Knex>("Database");
  const [user] = await db.table("users").where("id", 1);
  res.json(user);
};
