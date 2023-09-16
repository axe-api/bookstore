import { Express } from "express";
import cors from "cors";
import SimpleUserPagination from "./Handlers/SimpleUserPagination";

const onBeforeInit = async (app: Express) => {
  app.use(
    cors({
      origin: ["http://localhost:3005", "http://localhost:3200"],
    })
  );
  app.get("/", (req, res) => {
    res.json({
      name: "AXE API",
      version: "1.0.0-rc15",
      description: "The next generation Rest API framework.",
      documentation: "https://axe-api.com/getting-started/crud/index.html",
    });
  });
  app.get("/express-users", SimpleUserPagination);
};

const onAfterInit = async (app: Express) => {};

export { onBeforeInit, onAfterInit };
