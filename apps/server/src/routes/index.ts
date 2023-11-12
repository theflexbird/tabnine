import { Router } from "express";
import QueueRouter from "./queue";

const routes = Router();

routes.use("/api/", QueueRouter);

export default routes;
