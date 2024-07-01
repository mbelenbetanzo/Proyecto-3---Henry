import { DataSource } from "typeorm";
import User from "../entities/User";
import Appointment from "../entities/Appointments";
import Credential from "../entities/Credentials";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "qatar2022",
    database: "proyectom3",
    synchronize: true,
    logging: true,
    entities: [User, Appointment, Credential],
    subscribers: [],
    migrations: [],
})

export const userModel =  AppDataSource.getRepository(User)
//me va atraer el repositorio del usuario, croe qud donde esta guardadotodo,
//cuando llamemos a usermodel directamente llamados al repo del Usel, desde aca podemos
//hacer todo el crud de una manera mas simple que acer entity manager. 
