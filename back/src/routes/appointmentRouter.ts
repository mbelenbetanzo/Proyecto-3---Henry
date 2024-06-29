import { Router } from "express";
import { cancel, getAllAppointments, getAppointmentById, schedule } from "../controllers/appointmentControllers";

const appointmentsRouter = Router();

appointmentsRouter.get("/", getAllAppointments); //obtener todos los turnos

appointmentsRouter.get("/:id", getAppointmentById); //obtener un turno especifico

appointmentsRouter.post("/schedule", schedule); //agendar turno

appointmentsRouter.put("/cancel", cancel); //cancelar turno, cambiar status
  
export default appointmentsRouter;