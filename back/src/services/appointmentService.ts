import Appointment from "../entities/appointmentsE";
import User from "../entities/userE";
import IScheduleAppointmentServiceDto from "../interfaces/IScheduleAppointmentDto";
import { appointmentsModel, userModel } from "../repositories/indexRepo";




export const scheduleAppointmentService = async (scheduleTurnDto: IScheduleAppointmentServiceDto): Promise<Appointment> => {
    const user: User | null = await userModel.findOneBy({
        id: scheduleTurnDto.userId,
    });
    if (!user) throw Error("usuario no existe");

    const newAppointment: Appointment = appointmentsModel.create(scheduleTurnDto);
    await appointmentsModel.save(newAppointment);
    newAppointment.user = user;
    await appointmentsModel.save(newAppointment);
    console.log(newAppointment)
    return newAppointment;
};

export const getAllAppointmentService = async (): Promise<Appointment[]> => {
    const allAppointmens: Appointment[] = await appointmentsModel.find();
    return allAppointmens;
};

export const getAppointmentByIdService = async(
    turnId: number
): Promise<Appointment> => {
    const appointment: Appointment | null = await
    appointmentsModel.findOneBy({
        id: turnId,
    });
    if (!appointment) throw Error("turno no existe");
    return appointment;
};

export const cancelAppointmentService = async (
    turnId: number
): Promise<void> => {
    const appointment: Appointment | null = await
    appointmentsModel.findOneBy({
        id: turnId,
    });
    if(!appointment) throw Error("turno no existe");
    appointment.status = "cancelado";
    await appointmentsModel.save(appointment);
};