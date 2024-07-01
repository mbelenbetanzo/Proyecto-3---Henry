//dto es el tipo de dato que va a recibir, se usa como convencion en otro archivo aparte
//es un objeto, lo armo desde una interface

/*import IAppointments from "../interfaces/AppointmentsInterface";
import { createCredentials, validateCredentials } from "./credentialsService";
//import IUserDTO from "../dtos/userDTO";
//import ICredentialsDTO from "../dtos/credentialsDTO";
import IAppointmentDTO from "../dtos/appointmentsDTO";


const appointment: IAppointments[] = [];
let appointmentId = 1; //id para turnoss

//Implementar una función que pueda retornar el arreglo completo de turnos.
export const getAppointmentsService = async (): Promise<IAppointments[]> => {
    const allAppointments: IAppointments[] = appointment; //simular que lo busca en la db
    return allAppointments;
}


//Implementar una función que pueda obtener el detalle de un turno por ID.
export const getAppointmentByIdService = async (id: number): Promise<IAppointments> => {
    const foundAppointment: IAppointments | undefined = appointment.find((appointment) => {
        appointment.id === id
    })
    if (!foundAppointment) {
        throw Error ("Turno no encontrado")
    } return foundAppointment;
};

//Implementar una función que pueda crear un nuevo turno, siempre guardando, además,
//el ID del usuario que ha creado dicho turno. NO PUEDE HABER UN TURNO SIN ID DE
//USUARIO. 
export const createAppointmentService = async (createAppointmentDTO: IAppointmentDTO): Promise<IAppointments> => { 
    //estos parametros los recibire desde el front end.. el id no porque no se manda desde el front end, se genera dinamico
 const newAppointmentId = await createCredentials({
    username: createAppointmentDTO.,
    password: createUserDTO.password
 }); //aca se crea el usuario
 
 const newAppointment: IAppointments = {
    id: id
    date: 
    time: //Date
    status: //"active" | "cancelled" | "completed";
    description: //string;
    userId: //number;
 }
 appointment.push(newAppointment);
 return newAppointment;
}



//Implementar una función que reciba el id de un turno específico y una vez identificado
 //el turno correspondiente, cambiar su estado a “cancelled”. */
/*export const loginUserService = async (credentialsDTO: ICredentialsDTO) => {
    const credentialID = await validateCredentials(credentialsDTO)
    if (credentialID) return true

}*/
