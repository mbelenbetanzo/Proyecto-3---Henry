
import ICreateCredentials from "../interfaces/ICreateCredentials";
import { credentialModel } from "../repositories/indexRepo";
import IValidateCredentialDto from "../interfaces/IValidateCredentialDto";
import Credential from "../entities/credentialE";


export const createCredential = async (
    createCredentialDto: ICreateCredentials
): Promise<Credential> => {
    const newCredential: Credential = credentialModel.create(createCredentialDto);
    await credentialModel.save(newCredential);
    return newCredential;
}




export const validateCredential = async (
    validateCredentialDto: IValidateCredentialDto
): Promise<Credential> => {
    const {username, password} = validateCredentialDto;
    const foundCredential: Credential | null = await credentialModel.findOneBy({
        username
    })
    if (!foundCredential) throw Error("los datos incorrectos");
    if(password !== foundCredential?.password) throw Error ("los datos son incorrectos")
        return foundCredential;
};


