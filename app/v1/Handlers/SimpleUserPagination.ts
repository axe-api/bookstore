import { Request, Response } from "express";
import { IoCService } from "axe-api";
import { Knex } from "knex";
import { attachPaginate } from "knex-paginate";

export default async (req: Request, res: Response) => {
  const db = await IoCService.use<Knex>("Database");
  const users = await db
    .table("users")
    .paginate({ perPage: 10, currentPage: 1 });
  res.json(users);
};
