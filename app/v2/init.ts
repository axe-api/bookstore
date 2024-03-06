import cors from "cors";
import { App, AxeRequest, AxeResponse } from "axe-api";

const onBeforeInit = async (app: App) => {
  app.use(
    cors({
      origin: ["http://localhost:3005"],
    })
  );
  app.get("/", (req: AxeRequest, res: AxeResponse) => {
    res.json({
      name: "AXE API",
      description: "The next generation Rest API framework.",
      documentation: "https://axe-api.com/getting-started/crud/index.html",
    });
  });
};

const onAfterInit = async (app: App) => {};

export { onBeforeInit, onAfterInit };
