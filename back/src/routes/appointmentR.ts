import { Router } from "express";
import { getAllAppointments, getAppointmentById, schedule, cancel } from "../controllers/appointmentsCont";

const appointmentsR = Router();

appointmentsR.get("/", getAllAppointments)
appointmentsR.get("/:turnId", getAppointmentById)
appointmentsR.post("/", schedule)
appointmentsR.put("/cancel/:turnId", cancel)

export default appointmentsR

