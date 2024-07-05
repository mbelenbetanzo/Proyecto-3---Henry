import { AppDataSource } from "../config/appDataSource";
import Appointment from "../entities/appointmentsE";
import Credential from "../entities/credentialE";
import User from "../entities/userE";

export const credentialModel = AppDataSource.getRepository(Credential);

export const userModel = AppDataSource.getRepository(User);

export const appointmentsModel = AppDataSource.getRepository(Appointment);