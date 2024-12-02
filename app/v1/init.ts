import cors from "cors";
import SimpleUserPagination from "./Handlers/SimpleUserPagination";
import { App, AxeRequest, AxeResponse } from "axe-api";

const onBeforeInit = async (app: App) => {
  app.use(
    cors({
      origin: [
        "http://localhost:3005",
        "http://localhost:3200",
        "https://petstore.swagger.io",
      ],
    })
  );

  app.get("/", (req: AxeRequest, res: AxeResponse) => {
    res.json({
      name: "AXE API",
      description: "The next generation Rest API framework.",
      documentation: "https://axe-api.com/learn/quick-start.html",
    });
  });

  app.get("/direct-users", SimpleUserPagination);
};

const onAfterInit = async (app: App) => {};

export { onBeforeInit, onAfterInit };
