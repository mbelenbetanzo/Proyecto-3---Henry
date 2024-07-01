import IUser from "../interfaces/UserInterface";
import { createCredentials, validateCredentials } from "./credentialsService";
import IUserDTO from "../dtos/userDTO";
import ICredentialsDTO from "../dtos/credentialsDTO";
import { userModel } from "../config/data-source";

const user: IUser[] = [{
    id: 1,
    name: "belen",
    email: "mbelenbet",
    birthdate: new Date(),
    dni: "40424926",
    credentialsId: 1,

}];
let userId: number = 1;

//Implementar una función que pueda retornar el arreglo completo de usuarios.
export const getUsersService = async (): Promise<IUser[]> => {
    const allUsers: any = await userModel.find(); //simular que lo busca en la db
    return allUsers;//LECTURA DE DATOS //me trae todos los datos
}
//donde dice any va 1- IUser[] y en el de ida found user va IUser

// Implementar una función que pueda retornar un elemento del arreglo que haya sido identificado por id.
export const getUserByIdService = async (id: number): Promise<IUser> => {
    const foundUser: any = await userModel.findOneBy({id: id})
    if (!foundUser) {
        throw Error ("Usuario no encontrado")
    } return foundUser;
};

/*Implementar una función que pueda crear un nuevo usuario dentro del arreglo PERO 
ten en cuenta que al momento de crear el usuario, debe crear su correspondiente par
 de credenciales llamando a la función correspondiente del servicio de credenciales.
  Al recibir de esta función el id de las credenciales, debe guardar el dato en la 
  propiedad credentialsId. */



export const createUserService = async (createUserDTO: IUserDTO): Promise<any> => { 
    //estos parametros los recibire desde el front end.. el id no porque no se manda desde el front end, se genera dinamico
 const newCredential = await createCredentials({
    username: createUserDTO.username,
    password: createUserDTO.password
 }); //aca se crea el usuario
 
const newUser = await userModel.create(createUserDTO)//create es un metodo del repository de user mode; crea una instancia del usuario con la entidad
//aca crea una instancia del usuario con la entidad, todavia no guarde nada.

newUser.credential = newCredential //aca le agrego una nueva propiedad, el id
//ACA SE ESTA HACIENDO LA ASOCIACION

 //user.push(newUserT);
 userModel.save(newUser)
 return newUser;
}



export const loginUserService = async (credentialsDTO: ICredentialsDTO) => {
    const credentialID = await validateCredentials(credentialsDTO)
    if (credentialID) return true

}



