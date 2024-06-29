import { Router } from "express";
import { getAllUsers, getUserById, login, register } from "../controllers/usersControllers";

const usersRouter = Router();

usersRouter.get("/", getAllUsers) //controlador, 2do parametro que recibe el metodo http es una funcion de controlador, mque maneja la logica
  
usersRouter.get("/:id", getUserById ) //obtener el detalle de un usuario especifico por id

usersRouter.post("/", register) //registro nuevo usuario

usersRouter.post("/", login) //login del usuario


export default usersRouter;