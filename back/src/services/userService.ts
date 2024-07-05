import Credential from "../entities/credentialE";
import User from "../entities/userE";
import ICreateUserDto from "../interfaces/ICreateUserDto";
import { userModel } from "../repositories/indexRepo";
import { createCredential } from "./serviceCredentials";


export const getAllUserService = async (): Promise<User[]> => {
    const allUsers: User[] = await userModel.find({
        relations: { appointments: true}
        });
    return allUsers;
}



export const getUserByIdService = async (id: number): Promise<User> => {
    const user: User | null = await userModel.findOne({
        where: { id },
        relations: ["appointments"]
    })
    if (!user) throw new Error("usuario no encontrado");
    return user;
    
};


export const createUserService = async(
    createUserDto : ICreateUserDto
) => {
    const newUser: User = userModel.create(createUserDto);
    await userModel.save(newUser);

    const newCredential: Credential = await createCredential({
        username: createUserDto.username,
        password: createUserDto.password,
    });
    newUser.credential = newCredential;
    await userModel.save(newUser);

    return newUser;
}



export const findUserByCredentialId = async(
    credentialId: number
) => {
    const user: User | null = await userModel.findOneBy({
        credential: { id: credentialId }
    });
    if(!user) throw new Error("usuario no encontrado");
    return user;
}
