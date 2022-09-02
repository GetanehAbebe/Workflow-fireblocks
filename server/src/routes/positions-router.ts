import StatusCodes from "http-status-codes";
import fs from "fs";
import path from "path";
import { Request, Response, Router } from "express";

const router = Router();
const { CREATED, OK } = StatusCodes;

export const p = {
  get: "/:date",
  add: "/add",
  update: "/update",
  delete: "/delete/:date/:position",
} as const;

router.get(p.get, async (req: Request, res: Response) => {
  const { date } = req.params;
  const fileResponse = fs.readFileSync(
    path.join(__dirname, "../", "mock-db", "positions.json"),
    { encoding: "utf-8" }
  );
  const parsed = JSON.parse(fileResponse);
  return res.status(200).json(parsed[date] || {});
});

router.post(p.add, async (req: Request, res: Response) => {
  const { date, user, position } = req.body;
  const dir = path.join(__dirname, "../", "mock-db", "positions.json");
  // Check param

  if (!fs.existsSync(dir)) {
    fs.writeFileSync(dir, JSON.stringify({}));
  }
  const fileResponse = fs.readFileSync(
    path.join(__dirname, "../", "mock-db", "positions.json"),
    { encoding: "utf-8" }
  );

  if (!fileResponse) {
    fs.writeFileSync(
      path.join(__dirname, "../", "mock-db", "positions.json"),
      JSON.stringify({
        [date]: {
          [position]: user,
        },
      })
    );
  } else {
    const data = JSON.parse(fileResponse);
    if (!data[date]) {
      data[date] = {};
    }
    data[date][position] = user;
    fs.writeFileSync(
      path.join(__dirname, "../", "mock-db", "positions.json"),
      JSON.stringify(data)
    );
  }

  return res.status(CREATED).end();
});

router.delete(p.delete, async (req: Request, res: Response) => {
  const { date, position } = req.params;
  const fileResponse = fs.readFileSync(
    path.join(__dirname, "../", "mock-db", "positions.json"),
    { encoding: "utf-8" }
  );
  if (fileResponse) {
    const parsed = JSON.parse(fileResponse);
    if (parsed[date]?.[position]) {
      delete parsed[date][position];
    }
    fs.writeFileSync(
      path.join(__dirname, "../", "mock-db", "positions.json"),
      JSON.stringify(parsed)
    );
  }

  return res.status(OK).end();
});

export default router;
