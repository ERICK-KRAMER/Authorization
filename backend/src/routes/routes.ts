import { Router } from "express";
import { CreateUserController } from "../controller/createUserController";
import { AuthLoginUserController } from "../controller/authLoginUserController";
import { Auth } from "../middlewares/authToken";

const router = Router();

const userController = new CreateUserController();
const authLoginUserController = new AuthLoginUserController();

router.get("/", Auth ,(req, res) => {
  res.send("Hello World");
});

router.post('/CreateUser', userController.handler);
router.post('/login', authLoginUserController.handler);

export { router };