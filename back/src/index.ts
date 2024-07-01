import app from "./server"
import { PORT } from "./config/envs";
import "reflect-metadata"

//INDEX LEVANTA SERVIDOR Y BASE DE DATOS, ESTE ES EL ENTRY POINT PARA NODEMON

import { AppDataSource } from "./config/data-source";

AppDataSource.initialize() //la base de datos debe existir antes, la creo en sql shell
.then(res=>{ //el metodo initialize de devuelve una promesa
    console.log("Database connected");
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`)
    });
})
.catch(error => {
    throw Error("Connection failed" + error)
})

//app.listen(PORT, () => {
 //   console.log(`Server listening on port ${PORT}`)
//});






//instale dependencias
//configure nodemon.json y scripts en package json
//declare en el archivo de env las cosas secretas, aca el puerto
//luego carpeta config de env que se encarga de exportar todas las variables d enotrno
//crear carpeta src y dentro:
//cree carpeta middlewares, controllers, routes, services
//tambien, un server que es el que requiere todas las dependencias necesarias, instanciar a expres, le paso por middlewares
//cors,morgan,json, y creo el servidor de express, lo exporto 
//tambien en index me importo el server y las variables de entorno el env, y levanto el puerto
//crear las interfaces para practicar aunque lo hare con typeorm y postgree sql
