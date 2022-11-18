import { Nombrep } from "./nombrep";
import { Producto } from "./producto";

export class Usuario{
    _id?: number;
    nombre: string;
    apellido: string;
    encrypt: string;
    imagen: string;
    isregistro:boolean;
    mensaje?: string;
    nombrep?: Nombrep;

    constructor(nombre: string, apellido: string, encrypt: string, imagen: string, isregistro: boolean){
        this.nombre = nombre;
        this.apellido = apellido;
        this.encrypt = encrypt;
        this.imagen = imagen;
        this.isregistro = false;
    }
}

