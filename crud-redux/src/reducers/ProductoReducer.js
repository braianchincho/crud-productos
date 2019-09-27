import { 
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_ERROR,
    AGREGAR_PRODUCTO_EXITO
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
        default: return state;
    }
}