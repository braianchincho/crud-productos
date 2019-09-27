import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Header/>
      <Provider store= {store} >
        <div className="container">
          <Switch>
             <Route exact path="/" component={Productos}/>
             <Route exact path="/productos/nuevo" component={NuevoProducto}/>
             <Route exact path="/productos/editar/:id" component={EditarProducto}/>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
