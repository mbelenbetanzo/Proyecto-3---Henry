"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const indexR_1 = __importDefault(require("./routes/indexR"));
const appointmentR_1 = __importDefault(require("./routes/appointmentR"));
const server = (0, express_1.default)();
server.use((0, cors_1.default)());
server.use(express_1.default.json());
server.use((0, morgan_1.default)('dev'));
// Rutas principales
server.use('/turnos', appointmentR_1.default);
server.use('/', indexR_1.default);
exports.default = server;
