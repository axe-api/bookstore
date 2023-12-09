import { Request, Response } from "express";
import { IoCService } from "axe-api";
import { Knex } from "knex";

export default async (req: Request, res: Response) => {
  const db = await IoCService.use<Knex>("Database");
  const user = await db.table("users").where("id", 1);
  res.json(user);
};
