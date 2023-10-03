import express from 'express'
import { rutas } from './routes/rutas.js'
export class Api {
    
    constructor(){
        this.app = express()
        this.procesarPeticiones()
    }
    levantarServidor(){
        //Levantando el Servidor
        this.app.listen(3000,function(){
        console.log("Servidor operando con exito")
    })
    }
    procesarPeticiones(){
       this.app.use('/',rutas)
    }

    conectarBD(){}
} 