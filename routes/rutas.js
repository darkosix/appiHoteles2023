import  express  from "express";
import { ControladorHabitacion } from "../controllers/ControladorHabitacion.js";
import { ControladorReservas } from "../controllers/ContoladorReservas.js";

//Para poder llamar al controlador debo crear un objeto de la clases
//ControladorHabitacion
let controladorHabitacion = new ControladorHabitacion();
let controladorReservas = new ControladorReservas(); 

export let rutas=express.Router()

 //Atendiendo una petición y Respondiento de Habitaciones
rutas.post('/api/habitaciones',controladorHabitacion.registrarHabitacion)
rutas.get('/api/habitacion',controladorHabitacion.buscarHabitacionPorId)
rutas.get('/api/habitaciones',controladorHabitacion.buscarHabitaciones)
rutas.put('/api/habitaciones',controladorHabitacion.modificarHabitacion)
rutas.delete('/api/habitaciones',controladorHabitacion.borrarHabitacion)

//Atendiendo una petición y Respondiento Reservas
rutas.post('/api/reservas',controladorReservas.registrarReserva)
rutas.get('/api/reserva',controladorReservas.buscarReservaPorId)
rutas.get('/api/reservas',controladorReservas.buscarReservas)
rutas.put('/api/reservas',controladorReservas.modificarReserva)
rutas.delete('/api/reservas',controladorReservas.borrarReservas)