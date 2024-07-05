import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./userE";



@Entity({name: "appointments"})
class Appointment {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    date!: Date;

    @Column()
    time!: string;

    @Column()
    userId!: number;

    @Column({default: "active",})
    status!: string;

    @Column()
    description!: string;

    @ManyToOne(() => User, (user) => user.appointments) user!: User;
    
}

export default Appointment