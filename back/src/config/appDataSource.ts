import { DataSource } from "typeorm"
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./envs"
import User from "../entities/userE"
import Credential from "../entities/credentialE"
import Appointment from "../entities/appointmentsE"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER ,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize:true, //*
    // dropSchema: true, //*
    logging: false,
    // logging: [Ertrue
    entities: [User, Credential, Appointment],
    subscribers: [],
    migrations: [],
})