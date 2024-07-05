import { Router } from "express";
import userR from "./userR";
import appointmentsR from "./appointmentR";



const indexR: Router = Router();



indexR.use("/users", userR);
indexR.use ("/appointments", appointmentsR)


export default indexR;