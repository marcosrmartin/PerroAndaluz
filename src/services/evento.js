/**
 * Clase Evento, esta clase es la principal, la que va a contener la lógica de negocio de la aplicación, 
 * Esta clase va a ser una Entidad que va a trabajar con los usuarios y con los pagos.
 */
import Pago from './pago.js';
import Usuario from './usuario.js';
export default class Evento {
    /**
     * 
     * @param {String} Nombre // Nombre del Evento 
     * @param {Arraylist(Usuario)} Participantes // Participantes que hay en un Pago
     * @param {Arraylist(Pago)} Pagos // Lista De Pagos (Cada Pago contiene la cantidad y el usuario que la ha pagado)
     *  
     */
    constructor(Nombre, Participantes) {
        this.Nombre = Nombre;
        this.Participantes = Participantes;
        this.Pagos = [];
    }

    addPago(pago){
        return this.Pagos.push(pago)
    }

    gastoPorUsuario(){
        let coste
        this.Pagos.forEach(pago =>{
            coste += pago.Cantidad
        });
        return coste/this.Participantes.lenght
    }
}

