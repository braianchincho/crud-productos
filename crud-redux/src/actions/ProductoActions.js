import { 
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_ERROR,
    AGREGAR_PRODUCTO_EXITO
} from '../types'
// funcion principal
export function crearNuevoProductoAction(producto) {
    // dispatch manda a llamar a las acciones agregar producto error y exito
    return (dispatch) => {
        dispatch(nuevoProducto())
    }
}

export const nuevoProducto = () => ({
    type: AGREGAR_PRODUCTO
});