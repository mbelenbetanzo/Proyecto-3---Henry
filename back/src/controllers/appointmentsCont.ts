import { Request, Response } from "express";
import Appointment from "../entities/appointmentsE";
import { cancelAppointmentService, getAllAppointmentService, getAppointmentByIdService, scheduleAppointmentService } from "../services/appointmentService";

export const getAllAppointments = async(req: Request, res: Response) => {
    const allAppointments: Appointment[] = await
    getAllAppointmentService();
    res.status(200).json({message: allAppointments});
};



export const getAppointmentById = async(req: Request<{turnId: string },{}, {}>, res: Response) => {
    const { turnId } = req.params;
    try {
    const appointment: Appointment = await getAppointmentByIdService(Number(turnId));
    res.status(200).json(appointment);
    }catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                message: error.message,
            });
        } else {
            res.status(400).json({
                message: 'usuario no se registro',
            });
        }
    }
}


export const schedule  = async(req: Request, res: Response) => {

    const {date, time, userId, description } = req.body
    try {
        const newAppointment: Appointment = await scheduleAppointmentService({
            date, time, userId, description,
        });
        res.status(200).json(newAppointment);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                message: error.message,
            });
        } else {
            res.status(400).json({
                message: 'usuario no se registro',
            });
        }
    }
};



export const cancel  = async(req: Request<{turnId: string },{}, {}>, res: Response) => {
    const { turnId } = req.params;
    try {
        await cancelAppointmentService(Number(turnId));
        res.status(200).json({message: "turno cancelado"});
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                message: error.message,
            });
        } else {
            res.status(400).json({
                message: 'turno no existe',
            });
        }
    }
};