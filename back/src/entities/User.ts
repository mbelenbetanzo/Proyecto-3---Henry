import { Column, Entity, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from "typeorm"
import Appointment from "./Appointments"
import Credential from "./Credentials"

//hacemos una clase

@Entity ({
    name: "users" //nombre de la entidad en la db, osea el nombre de la tabla
})

class User { //con la clase definimos
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    birthdate: string

    @Column()
    dni: string

    @Column()
    credentialsId: number

    @OneToOne(() => Credential) //aca la entidad
    //el one to one se hace en la tabla A
    @JoinColumn()
    credential: Credential //creamos tabla credential y el tipo de dato que va a tener es del tipo Credential

    //en one to many.... recibe dos funciones de callback, en la primera recibimos el tipo
    //que lo traemos de
    @OneToMany(() => Appointment, (appointment) => appointment.users)
    appointments: Appointment[] //aca le crea un nuevo atributo, que va a ser la clase, en array,aca van a ir todos los usuarios guardados cuando se haga la relacion
//primer arametro el tipo de dato a asociar en este caso appointment,como segundo callback la clase a instanciar y con que tabla la asocio appointment a user


} //este es el modelo que creamos con lo que se va a poder guardar en la tabla, modelo de info que tendra la tabla

export default User

//DTO es una interfaz, se llama asi porque es un tipo de dato,solo para datos que recibe por parametros una funcion
//interfaz es algo mas general, 
//con la entidad ya creamos la tabla, no tiene nada que ver con la interfaz
