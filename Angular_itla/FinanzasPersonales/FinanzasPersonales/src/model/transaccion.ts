import { Categoria } from "./Categoria";

export interface Transaccion {
    id: number;
    monto: number;
    fecha: Date;
    tipo: Categoria;
}