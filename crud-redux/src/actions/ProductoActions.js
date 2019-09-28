import { 
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_ERROR,
    AGREGAR_PRODUCTO_EXITO,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_ERROR,
    DESCARGA_PRODUCTOS_EXITOSA
} from '../types';

import clienteAxios from '../config/axios';

// funcion principal
export function crearNuevoProductoAction(producto) {
    // dispatch manda a llamar a las acciones agregar producto error y exito
    return (dispatch) => {
        dispatch(nuevoProducto());
        // insertar en api 
        clienteAxios.post('/libros',producto).then(
            res => {dispatch(agregarProductoExito(producto));} 
            
        ).catch(err => {agregarProductoError(true)})
        
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

export function obtenerProductoAction() {
    return (dispatch) => {
        dispatch(obtenerProductoComienzo());
        // consultar api
        clienteAxios.get('./libros').then(res => {
            dispatch(descargaExitosa(res.data));
        }).catch(err => {
            dispatch(descargaError());
        });
    }
}

export const  obtenerProductoComienzo =  () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS
});

export const descargaExitosa = (productos) => ({
    type:DESCARGA_PRODUCTOS_EXITOSA,
    payload: productos
})

export const descargaError = () => ({
    type:DESCARGA_PRODUCTOS_ERROR,
})

