export enum AppointmentStatus {
    active = "active",
    canceled = "canceled",
    completed = "completed"
}
export default interface IAppointments {
    id: number;
    date: Date;
    time: string;
    userId: number;
    status: AppointmentStatus;
    description: string;
}


