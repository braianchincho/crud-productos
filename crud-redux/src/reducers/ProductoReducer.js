import { 
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_ERROR,
    AGREGAR_PRODUCTO_EXITO,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_ERROR,
    DESCARGA_PRODUCTOS_EXITOSA
} from '../types';


const initalState = {
    productos: [],
    error: null,
    loading: false
}

export default function ProductosReducer (state = initalState, action) {
    switch(action.type) {
        case AGREGAR_PRODUCTO: 
            return {
                ...state,
                error: null,
                loading: false
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                error: null,
                loading: false,
                productos: [...state.productos , action.payload]
            }
        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                error: action.payload
            }
            case COMENZAR_DESCARGA_PRODUCTOS:
                return {
                    ...state,
                    loading: true
                }
            case DESCARGA_PRODUCTOS_EXITOSA:
                return {
                    ...state,
                    loading: false,
                    error: false,
                    productos: action.payload
                }
                case DESCARGA_PRODUCTOS_ERROR:
                        return {
                            ...state,
                            loading: false,
                            productos: [],
                            error: true
                        }
        
        default: return state;
    }
}