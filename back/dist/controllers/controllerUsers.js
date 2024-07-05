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
exports.login = exports.register = exports.getUserById = exports.getAllUsers = void 0;
const userService_1 = require("../services/userService");
const serviceCredentials_1 = require("../services/serviceCredentials");
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userService_1.getAllUserService)();
        res.status(200).json(users);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                message: error.message,
            });
        }
        else {
            res.status(400).json({
                message: 'An unexpected error occurred',
            });
        }
    }
});
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield (0, userService_1.getUserByIdService)(Number(id));
        if (user)
            res.status(200).json(user);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                message: error.message,
            });
        }
        else {
            res.status(400).json({
                message: 'usuario no se encontro',
            });
        }
    }
});
exports.getUserById = getUserById;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, birthdate, nDni, username, password } = req.body;
        const newUser = yield (0, userService_1.createUserService)({
            name, email, birthdate, nDni, username, password
        });
        res.status(201).json(newUser);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                message: error.message,
            });
        }
        else {
            res.status(400).json({
                message: 'usuario no se registro',
            });
        }
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const credential = yield (0, serviceCredentials_1.validateCredential)({
            username,
            password,
        });
        const user = yield (0, userService_1.findUserByCredentialId)(credential.id);
        res.status(200).json({
            loggin: true, user,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                message: error.message,
            });
        }
        else {
            res.status(400).json({
                message: 'usuario no se registro bien',
            });
        }
    }
});
exports.login = login;
///////////////////////////////////////////////
