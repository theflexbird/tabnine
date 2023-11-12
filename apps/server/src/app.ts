import express from "express";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

if (import.meta.env.PROD)
  app.listen(5001);

export const viteNodeApp = app;
