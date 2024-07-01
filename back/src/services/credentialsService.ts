import ICredentials from "../interfaces/CredentialsInterface";
import ICredentialsDTO from "../dtos/credentialsDTO";

const credentials: ICredentials[] = []; //un array vacio
let credentialId: number = 1;




export const createCredentials = async (credentialsDTO: ICredentialsDTO): Promise<ICredentials> => {
 const newCredential: ICredentials = { 
    id: credentialId++,
    username: credentialsDTO.username, //guardo aca lo que me viene por parametro
    password: credentialsDTO.password ,
 }
 credentials.push(newCredential)

 return newCredential;
} //la credencial devuelve un numero obvio

export const validateCredentials = async (credentialsDTO: ICredentialsDTO): Promise<number> => {
   const foundCredentials: ICredentials | undefined = credentials.find((credentials) => {
    credentials.username === credentialsDTO.username //el username que me pasan por parametro, fijate si el usernmane de alguno coincide con el que te paso como parametro
   })
   if (foundCredentials && foundCredentials.username !== credentialsDTO.username && foundCredentials.password !== credentialsDTO.password) {
    throw Error("Credenciales incorrectas")
   } else if (!foundCredentials) {
    throw Error ("Credenciales no encontradas")
   } else {
    return foundCredentials.id;
   }
   } 