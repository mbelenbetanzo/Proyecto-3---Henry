"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointmentService = exports.getAppointmentByIdService = exports.getAllAppointmentService = exports.scheduleAppointmentService = void 0;
const indexRepo_1 = require("../repositories/indexRepo");
const scheduleAppointmentService = (scheduleTurnDto) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield indexRepo_1.userModel.findOneBy({
        id: scheduleTurnDto.userId,
    });
    if (!user)
        throw Error("usuario no existe");
    const newAppointment = indexRepo_1.appointmentsModel.create(scheduleTurnDto);
    yield indexRepo_1.appointmentsModel.save(newAppointment);
    newAppointment.user = user;
    yield indexRepo_1.appointmentsModel.save(newAppointment);
    console.log(newAppointment);
    return newAppointment;
});
exports.scheduleAppointmentService = scheduleAppointmentService;
const getAllAppointmentService = () => __awaiter(void 0, void 0, void 0, function* () {
    const allAppointmens = yield indexRepo_1.appointmentsModel.find();
    return allAppointmens;
});
exports.getAllAppointmentService = getAllAppointmentService;
const getAppointmentByIdService = (turnId) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield indexRepo_1.appointmentsModel.findOneBy({
        id: turnId,
    });
    if (!appointment)
        throw Error("turno no existe");
    return appointment;
});
exports.getAppointmentByIdService = getAppointmentByIdService;
const cancelAppointmentService = (turnId) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield indexRepo_1.appointmentsModel.findOneBy({
        id: turnId,
    });
    if (!appointment)
        throw Error("turno no existe");
    appointment.status = "cancelado";
    yield indexRepo_1.appointmentsModel.save(appointment);
});
exports.cancelAppointmentService = cancelAppointmentService;
