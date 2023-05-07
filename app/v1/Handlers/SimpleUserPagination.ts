import { Request, Response } from "express";
import { IoCService } from "axe-api";
import { Knex } from "knex";

export default async (req: Request, res: Response) => {
  const db = await IoCService.use("Database");
  const users = await db.table("users").paginate({ perPage: 10, page: 1 });
  res.json(users);
};
