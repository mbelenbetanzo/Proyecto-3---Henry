
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import indexR from './routes/indexR';
import appointmentsR from './routes/appointmentR';

const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

// Rutas principales
server.use('/turnos', appointmentsR);
server.use ('/', indexR)
export default server;