import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes/index"

const app = express();

app.use(morgan("dev")); //LA APP USARA TODO ESO, OSEA EL SERVIDOR PARA FUNCIONAR
app.use(express.json());
app.use(cors());

app.use(router)

export default app;