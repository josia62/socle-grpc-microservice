import { Router } from "express";
import { userController } from "../controller/user.controller";

const userRoutes = () => {
  const router = Router();
  router.get("/:id", userController.getUserById);
  router.post("/", userController.createUser);
  return router;
};

export const userRouter = userRoutes();
