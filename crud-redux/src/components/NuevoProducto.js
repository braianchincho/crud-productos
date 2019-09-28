import React, {useState} from 'react';
import { crearNuevoProductoAction } from '../actions/ProductoActions';
import { validarFomularioAction, validacionExito , validacionError }
  from '../actions/ValidacionActions';
import { useDispatch, useSelector } from 'react-redux';
import ErrorForm from './ErrorFormulario';
const NuevoProducto = ({history}) => {
    // state
    const [ nombre, setNombre ] = useState('');
    const [ precio, setPrecio ] = useState('');

    // redux
    const dispatch = useDispatch();
    const agregarProducto = (producto) => dispatch(
        crearNuevoProductoAction(producto)
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

    const submitNuevoProducto = e => {
        e.preventDefault();

        // validar formulario
        validarFormulario();
        if(nombre.trim() === '' || precio.trim() === '' ) {
            errorValidacion();
            return;
        }
        exitoValidacion();
        // agregar libro
        agregarProducto({nombre,precio});
        
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
                                    value={nombre}
                                    onChange={ e => setNombre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Libro</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Precio Libro"
                                    value={precio} 
                                    onChange={ e => setPrecio(e.target.value)}
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