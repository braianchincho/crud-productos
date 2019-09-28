import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductoAction } from '../actions/ProductoActions'
import TableRowProducto from './TableRowProducto';
const Productos = () => {
    // redux
    const dispatch = useDispatch();
    useEffect(() => {
        const cargarProductos = () => dispatch(obtenerProductoAction() );
        cargarProductos();
    },[]);
// acceder a reduc state
    const loading = useSelector(state => state.productos.loading);
    const error = useSelector(state => state.productos.error);
    const productos = useSelector(state => state.productos.productos);
    if (loading) {
        return <h4 className="text-center">Cargando Por favor espere</h4>;
    }
    if (error) {
        return <h4 className="text-center">No hay datos disponibles </h4>;
    }
    return (  
        <React.Fragment>
        <h2 className="text-center my-5">Listado de Productos</h2>

        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Acciones</th>
                </tr>  
                {productos.map(element => (
                   <TableRowProducto 
                     producto={element}
                     key={element.id}
                   />
                ))} 
               
            </thead>
            <tbody>

            </tbody>
        </table>
    </React.Fragment>
    );
}
 
export default Productos;