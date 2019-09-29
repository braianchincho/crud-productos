import { 
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_ERROR,
    AGREGAR_PRODUCTO_EXITO,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_ERROR,
    DESCARGA_PRODUCTOS_EXITOSA,
    PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINAR_ERROR,
    PRODUCTO_ELIMINAR_EXITO,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITAR_ERROR,
    PRODUCTO_EDITAR_EXITO
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

// eliminar producto

export function borrarProductoAction(id) {
    return (dispatch) => {
        dispatch(obtenerProductoEliminar(id))
        clienteAxios.delete(`/libros/${id}`).then(res=>{
            dispatch(eliminarProductoExito(id))
        }).catch(err=>{
            dispatch(eliminarProductoError(id))
        })
    }
}

export const obtenerProductoEliminar = () => ({
    type:PRODUCTO_ELIMINAR
});

export const eliminarProductoExito = (id) => ({
    type:PRODUCTO_ELIMINAR_EXITO,
    payload: id
});

export const eliminarProductoError = (id) => ({
    type:PRODUCTO_ELIMINAR_ERROR,
    payload: id
});

// Obtener el producto

export function obtenerProductoEditarAction(id) {
    return(dispatch) => {
        
        clienteAxios.get(`/libros/${id}`).then(
            res => (dispatch(obtenerProductoEditar(res.data)) )
        );
        // obtener producto
    }
}

export const obtenerProductoEditar = producto => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
});

export function editarProductoAction(producto) {
    return (dispatch) => {
        clienteAxios.put(`/libros/${producto.id}`,producto).then(
            res => {
                dispatch(editarProductoAction(producto))
            }
        ).catch(err => {

        })
    }
}

export const editarProductoExito = producto => ({
    type: PRODUCTO_EDITAR_EXITO,
    payload: producto
})