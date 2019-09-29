import { combineReducers } from 'redux';
import ProductoReducer from './ProductoReducer';
import ValidacionReducer from './ValidacionReducer';
export default combineReducers({
    productos: ProductoReducer,
    error: ValidacionReducer
});