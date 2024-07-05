"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const envs_1 = require("./config/envs");
const server_1 = __importDefault(require("./server"));
const appDataSource_1 = require("./config/appDataSource");
appDataSource_1.AppDataSource.initialize()
    .then(() => {
    console.log(`Database conectada en puerto`);
    server_1.default.listen(envs_1.PORT, () => {
        console.log(`servidor escuchando en el puerto :${envs_1.PORT}`);
    });
})
    .catch((error) => console.log(error));
