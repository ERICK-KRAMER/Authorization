import express from "express";
import { router } from "./routes/routes";
import { ErrorMessage } from "./middlewares/errorMessage";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(router);
app.use(ErrorMessage);

const port = 3000;

app.listen(port, () => {
  console.log("esta funcionando");
});