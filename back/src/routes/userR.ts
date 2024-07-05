import { Router } from "express";
import {getAllUsers, getUserById, login, register} from "../controllers/controllerUsers";

const userR = Router();

userR.get("/", getAllUsers);

userR.get("/:id", getUserById);

userR.post("/register", register);

userR.post("/login", login);

export default userR;
