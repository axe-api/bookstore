import { Express } from "express";
import cors from "cors";

const onBeforeInit = async (app: Express) => {
  app.use(
    cors({
      origin: ["http://localhost:3005"],
    })
  );
  app.get("/", (req, res) => {
    res.json({
      name: "AXE API",
      description: "The next generation Rest API framework.",
      documentation: "https://axe-api.com/getting-started/crud/index.html",
    });
  });
};

const onAfterInit = async (app: Express) => {};

export { onBeforeInit, onAfterInit };
