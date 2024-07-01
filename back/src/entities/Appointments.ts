import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm"
import User from "./User"

//hacemos una clase

@Entity ({
    name: "appointments" //nombre de la entidad en la db, osea el nombre de la tabla
})

class Appointment { //con la clase definimos
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    date: Date

    @Column()
    time: string

    @Column({default: "Active"})//que por defecto este en active
    status: string

    @Column()
    description: string
//el userid lo crea la relacion por nosotros

@ManyToOne(() => User, (user) => user.appointments)
users: User
    
   
} 

export default Appointment