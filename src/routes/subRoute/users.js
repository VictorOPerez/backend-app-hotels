import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello, this is auth endpoint users");
});

export default router;
