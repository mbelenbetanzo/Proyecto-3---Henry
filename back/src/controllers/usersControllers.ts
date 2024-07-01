import {Router, Request, Response} from "express"
import { createUserService, getUserByIdService, getUsersService, loginUserService } from "../services/userService"
import IUser from "../interfaces/UserInterface";
import IUserDTO from "../dtos/userDTO";
import { validateCredentials } from "../services/credentialsService";
import ICredentialsDTO from "../dtos/credentialsDTO";

export const getAllUsers = async (req: Request, res: Response) => { //siempre asincrona
  try {
    const users = await getUsersService();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({error: "Error al obtener los usuarios"})
  }
}



export const getUserById =  async (req: Request, res: Response) => {
    try {
        const { id } = req.params; //si me mandan un id lo tomo por aca
        const user: IUser = await getUserByIdService(Number(id)); //se lo pasamos a numero
        res.status(200).json(user);
    } catch (error: any) {
        res.status(400).json({error: "No encontramos el usuario"})
    }//aca este no funciona pero lo veo despues, creo es el servicio

}

export const register =  async (req: Request, res: Response) => {
    try { //esto es lo que me envia cuando me hace el register desde el front
        const { name, email, username, password, birthdate, dni }: IUserDTO = req.body;
        const newUser = await createUserService({
            name, email, username, password, birthdate, dni})
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json({error: "No pudimos registrarte"})
    }
}

export const login =  async (req: Request, res: Response) => {
    try {
        const {username, password}: ICredentialsDTO = req.body;
        const userExists = await loginUserService({username, password})
        if (userExists) res.status(200).json({message: "Usuario logueado"});
        throw Error ("Credenciales incorrectas no pudimos")
    } catch (error) {
        res.status(400).json({error: "No pudimos loguearte"})
        
    }

}