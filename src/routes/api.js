import { Router } from "express";
import authRoute from "./subRoute/auth.js";
import hotelsRoute from "./subRoute/hotels.js";
import roomsRoute from "./subRoute/rooms.js";
import usersRoute from "./subRoute/users.js";
const router = Router();

router.use("/auth", authRoute);
router.use("/hotels", hotelsRoute);
router.use("/rooms", roomsRoute);
router.use("/users", usersRoute);

export default router;
