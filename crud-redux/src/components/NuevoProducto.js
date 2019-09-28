import React, { useState, useEffect , useRef } from 'react';
import { crearNuevoProductoAction, editarProductoAction,
    obtenerProductoEditarAction , nuevoProducto} from '../actions/ProductoActions';
import { validarFomularioAction, validacionExito , validacionError }
  from '../actions/ValidacionActions';
import { useDispatch, useSelector } from 'react-redux';
import ErrorForm from './ErrorFormulario';
const NuevoProducto = ({history,match}) => {
    // state

    const idEditarProducto = match.params.id

    const nombreRef = useRef('');
    const precioRef = useRef('');
   
    // redux
    const dispatch = useDispatch();

    

    useEffect( () => {
        if(idEditarProducto) {
            dispatch(obtenerProductoEditarAction(idEditarProducto));
        } else {
            dispatch(nuevoProducto());
        }
        
    },[dispatch,idEditarProducto]);
 
    

    const agregarProducto = (producto) => dispatch(
        crearNuevoProductoAction(producto)
    );
    const editarProducto = (producto) => dispatch(
        editarProductoAction(producto)
    );

    const validarFormulario = () => dispatch( 
        validarFomularioAction() 
    );
    const errorValidacion = () => dispatch( 
        validacionError() 
    );
    const exitoValidacion = () => dispatch( 
        validacionExito() 
    );
    // obtener el state de redux
    const error = useSelector((state) => state.error.error);
    const producto = useSelector((state) => {
        const prod = state.productos.productoEditar;
        return prod || {nombre: '' , precio: ''} ;
    } );

    const submitNuevoProducto = e => {
        e.preventDefault();
        // validar formulario
        producto.nombre = nombreRef.current.value;
        producto.precio = precioRef.current.value;
        validarFormulario();
        if(producto.nombre.trim() === '' || producto.precio.trim() === '' ) {
            errorValidacion();
            return;
        }
        exitoValidacion();
        // agregar libro
        if(idEditarProducto) {
            editarProducto(producto);
        } else {
            agregarProducto(producto);
        }
        
        
        // redireccionar
        history.push('/');
        
    }

    return ( 
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">Agregar Nuevo Libro</h2>
                        <form onSubmit={submitNuevoProducto}>
                            <div className="form-group">
                                <label>Nombre Libro</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nombre Libro" 
                                    defaultValue={producto.nombre}
                                    ref={nombreRef}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Libro</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Precio Libro"
                                    defaultValue={producto.precio}
                                    ref={precioRef}
                                />
                            </div>
                            <ErrorForm 
                              error={error} 
                              mensaje="todos los campos son obligatorios"
                              />
                            <button type="submit" 
                            className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NuevoProducto;