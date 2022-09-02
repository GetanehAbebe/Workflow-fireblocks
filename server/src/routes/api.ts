import { Router } from "express";
import userRouter from "./user-router";
import positionsRouter from "./positions-router";

const baseRouter = Router();

baseRouter.use("/users", userRouter);
baseRouter.use("/positions", positionsRouter);


export default baseRouter;
