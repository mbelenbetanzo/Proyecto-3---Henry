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
exports.findUserByCredentialId = exports.createUserService = exports.getUserByIdService = exports.getAllUserService = void 0;
const indexRepo_1 = require("../repositories/indexRepo");
const serviceCredentials_1 = require("./serviceCredentials");
const getAllUserService = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield indexRepo_1.userModel.find({
        relations: { appointments: true }
    });
    return allUsers;
});
exports.getAllUserService = getAllUserService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield indexRepo_1.userModel.findOne({
        where: { id },
        relations: ["appointments"]
    });
    if (!user)
        throw new Error("usuario no encontrado");
    return user;
});
exports.getUserByIdService = getUserByIdService;
const createUserService = (createUserDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = indexRepo_1.userModel.create(createUserDto);
    yield indexRepo_1.userModel.save(newUser);
    const newCredential = yield (0, serviceCredentials_1.createCredential)({
        username: createUserDto.username,
        password: createUserDto.password,
    });
    newUser.credential = newCredential;
    yield indexRepo_1.userModel.save(newUser);
    return newUser;
});
exports.createUserService = createUserService;
const findUserByCredentialId = (credentialId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield indexRepo_1.userModel.findOneBy({
        credential: { id: credentialId }
    });
    if (!user)
        throw new Error("usuario no encontrado");
    return user;
});
exports.findUserByCredentialId = findUserByCredentialId;
