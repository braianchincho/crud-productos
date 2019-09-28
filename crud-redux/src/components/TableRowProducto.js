import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { borrarProductoAction } from '../actions/ProductoActions';
import Swal from 'sweetalert2';

const TableRowProducto = ({producto}) => {
    // Dispatch 
    const dispatch = useDispatch();
    const borrarProducto = (id) => dispatch(
        borrarProductoAction(id)
    );
    const confirmarEliminarProducto = id => {
        Swal.fire({
            title: '¿Estas seguro?',
            text: "No se puede revertir esta acción",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Borrar',
            cancelButtonText: 'Cancelar',
          }).then((result) => {
            if (result.value) {
              borrarProducto(id);
              Swal.fire(
                'Eliminado',
                'El producto se elimino correctamente',
                'success'
              )
            }
          })
    };
    return (
        <tr>
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td className="acciones">
                <Link className="btn btn-primary"
                 to={`/productod/editar/${producto.id}`}>
                     Editar
                </Link>
                <button
                    className="btn btn-danger ml-1"
                    onClick={() => confirmarEliminarProducto(producto.id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    );
}
 
export default TableRowProducto;