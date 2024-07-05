import "reflect-metadata"
import { PORT } from "./config/envs";
import server from "./server";
import { AppDataSource } from "./config/appDataSource";




AppDataSource.initialize()
.then(() => {
    console.log(`Database conectada en puerto`);
    server.listen(PORT, () => {
        console.log(`servidor escuchando en el puerto :${PORT}`);
    });
})
.catch((error) => console.log(error))
