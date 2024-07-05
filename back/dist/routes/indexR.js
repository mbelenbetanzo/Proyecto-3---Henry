"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userR_1 = __importDefault(require("./userR"));
const appointmentR_1 = __importDefault(require("./appointmentR"));
const indexR = (0, express_1.Router)();
indexR.use("/users", userR_1.default);
indexR.use("/appointments", appointmentR_1.default);
exports.default = indexR;
