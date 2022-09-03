import StatusCodes from "http-status-codes";
import fs from "fs";
import path from "path";
import { Request, Response, Router } from "express";

const router = Router();
const { OK } = StatusCodes;

// Paths
export const p = {
  get: "/all",
} as const;

router.get(p.get, async (_: Request, res: Response) => {
  const fileResponse = fs.readFileSync(
    path.join(__dirname, "../", "mock-db", "users.json"),
    { encoding: "utf-8" }
  );
  const parsed = JSON.parse(fileResponse);
  return res.status(OK).json(parsed.users);
});

export default router;
