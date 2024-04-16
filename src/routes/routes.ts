import { Router } from "express";
import { CreateUserController } from "../controller/createUserController";

const router = Router();
const userController = new CreateUserController();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post('/CreateUser', userController.handler)

export { router };