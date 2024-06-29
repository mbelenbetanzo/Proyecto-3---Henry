interface IAppointments {
    id: number;
    date: Date;
    time: string;
    status: "active" | "cancelled" | "completed";
    description: string;
    userId: number;
}

export default IAppointments;