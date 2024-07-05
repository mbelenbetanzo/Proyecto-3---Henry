"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentsModel = exports.userModel = exports.credentialModel = void 0;
const appDataSource_1 = require("../config/appDataSource");
const appointmentsE_1 = __importDefault(require("../entities/appointmentsE"));
const credentialE_1 = __importDefault(require("../entities/credentialE"));
const userE_1 = __importDefault(require("../entities/userE"));
exports.credentialModel = appDataSource_1.AppDataSource.getRepository(credentialE_1.default);
exports.userModel = appDataSource_1.AppDataSource.getRepository(userE_1.default);
exports.appointmentsModel = appDataSource_1.AppDataSource.getRepository(appointmentsE_1.default);
