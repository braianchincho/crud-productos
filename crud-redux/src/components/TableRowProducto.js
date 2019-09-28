import React from 'react';
import { Link } from 'react-router-dom';
const TableRowProducto = ({producto}) => {
    return (
        <tr>
            <td scope="col">{producto.nombre}</td>
            <td scope="col">{producto.precio}</td>
            <td scope="col" className="acciones">
                <Link className="btn btn-primary"
                 to={`/productod/editar/${producto.id}`}>
                     Editar
                </Link>
                <button
                    className="btn btn-danger ml-1"
                >
                    Eliminar
                </button>
            </td>
        </tr>
    );
}
 
export default TableRowProducto;