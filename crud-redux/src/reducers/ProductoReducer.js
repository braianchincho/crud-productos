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


const initalState = {
    productos: [],
    error: null,
    loading: false,
    productoEditar: null
}

export default function ProductosReducer (state = initalState, action) {
    switch(action.type) {
        case AGREGAR_PRODUCTO: 
            return {
                ...state,
                error: null,
                loading: false,
                productoEditar: null
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                error: null,
                loading: false,
                productos: [...state.productos , action.payload],
                productoEditar: null
            }
        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                error: action.payload
            }
            case COMENZAR_DESCARGA_PRODUCTOS:
                return {
                    ...state,
                    loading: true,
                    productoEditar: null
                }
            case DESCARGA_PRODUCTOS_EXITOSA:
                return {
                    ...state,
                    loading: false,
                    error: false,
                    productos: action.payload,
                    productoEditar: null
                }
                case DESCARGA_PRODUCTOS_ERROR:
                        return {
                            ...state,
                            loading: false,
                            productos: [],
                            error: true,
                            productoEditar: null
                        }
                case PRODUCTO_ELIMINAR: 
                    return {
                        ...state,
                        error: null
                    }
                case PRODUCTO_ELIMINAR_EXITO:
                    return {
                        ...state,
                        error: null,
                        productos: state.productos.filter(
                            producto => (producto.id !== 
                                action.payload)
                        )
                    }
                case PRODUCTO_ELIMINAR_ERROR: 
                    return {
                        ...state,
                        error: true
                    }
                case OBTENER_PRODUCTO_EDITAR:
                    return {
                        ...state,
                        error:null,
                        productoEditar: action.payload
                        
                    }
                case PRODUCTO_EDITAR_EXITO: 
                    return {
                        ...state,
                        error: null,
                        productoEditar: null,
                        productos: state.productos.
                            filter( producto => (
                                producto.id !== action.payload.id
                        )).push(action.payload)
                    }
        default: return state;
    }
}