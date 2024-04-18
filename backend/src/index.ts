import express from "express";
import { router } from "./routes/routes";
import { ErrorMessage } from "./middlewares/errorMessage";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(router);
app.use(ErrorMessage);


const port = 3000;

app.listen(port, () => {
  console.log("esta funcionando");
});