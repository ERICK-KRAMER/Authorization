import { Router } from "express";
import { Register } from "../controller/createUserController"
import { SingIn } from "../controller/loginController";
import { Auth } from "../middlewares/authToken";

const router = Router();

const userController = new Register();
const authLoginUserController = new SingIn();

router.get("/", Auth, (req, res) => {
  res.send("Hello World");
});

router.post('/register', userController.handler);
router.post('/login', authLoginUserController.handler);

export { router };