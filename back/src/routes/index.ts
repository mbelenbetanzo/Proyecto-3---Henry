import { Router } from "express";
import usersRouter from "./usersRouter";//have no idea why this was create by himself
import appointmentsRouter from "./appointmentRouter";

const router: Router = Router(); //gracias a type express

router.use("/users", usersRouter);
router.use("/appointments", appointmentsRouter); //esto redirige a las rutas

//router.delete("/users")
  
export default router;

//el index manejara todas las rutas y vera a cual ruta va, maneja las peticiones y
//deriva a cada ruta