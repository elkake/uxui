import Router from "express";
// import { check } from "express-validator";
import * as UserController from "../controllers/userController";

const router = Router();

router.get("/", UserController.getUsers);

router.post("/", UserController.createUsers);

export default router;