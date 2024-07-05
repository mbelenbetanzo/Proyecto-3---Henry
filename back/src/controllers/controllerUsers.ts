import { Request, Response } from "express";
import { createUserService, findUserByCredentialId, getAllUserService, getUserByIdService } from "../services/userService"
import ICreateUserDto from "../interfaces/ICreateUserDto";
import ICredential from "../interfaces/credentialsInter";
import { validateCredential } from "../services/serviceCredentials";
import User from "../entities/userE";
import ICreateCredentials from "../interfaces/ICreateCredentials";
import Credential from "../entities/credentialE";


export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users: User[] = await getAllUserService();
        res.status(200).json(users);
    }catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                message: error.message,
            });
        } else {
            res.status(400).json({
                message: 'An unexpected error occurred',
            });
        }
    }
}


export const getUserById = async (req: Request<{id: string},{},{}>, res: Response) => {
    try {
        const {id} = req.params;
        const user: User = await getUserByIdService(Number(id))
        if (user) res.status(200).json(user);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                message: error.message,
            });
        } else {
            res.status(400).json({
                message: 'usuario no se encontro',
            });
        }
    }
}



export const register = async (req: Request<{},{}, ICreateUserDto>, res: Response) => {
    
    try {
        const {name, email, birthdate, nDni, username, password} = req.body;
        const newUser: User = await createUserService({
            name, email, birthdate, nDni, username, password
        });
        res.status(201).json(newUser)

    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                message: error.message,
            });
        } else {
            res.status(400).json({
                message: 'usuario no se registro',
            });
        }
    }
    
}



export const login = async (req: Request<{}, {}, ICreateCredentials>, res: Response) => {
    try {
        const { username, password } = req.body;
        const credential: Credential = await validateCredential({
            username,
            password,
        })
        const user: User | null = await findUserByCredentialId(credential.id);
        res.status(200).json({
            loggin: true, user,
        })
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                message: error.message,
            });
        } else {
            res.status(400).json({
                message: 'usuario no se registro bien',
            });
        }
    }
}

///////////////////////////////////////////////



