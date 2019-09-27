import { 
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_ERROR,
    AGREGAR_PRODUCTO_EXITO
} from '../types';

import clienteAxios from '../config/axios';

// funcion principal
export function crearNuevoProductoAction(producto) {
    // dispatch manda a llamar a las acciones agregar producto error y exito
    return (dispatch) => {
        dispatch(nuevoProducto());
        // insertar en api 
        clienteAxios.post('/libros',producto).then(
            res => {console.log(res)} 
            
        ).catch(err => {agregarProductoError(true)})
        dispatch(agregarProductoExito(producto));
    }
}

export const nuevoProducto = () => ({
    type: AGREGAR_PRODUCTO
});

export const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

export const agregarProductoError = error => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: error
})