import axios from 'axios';

const clienteAxios = axios.create({
    baseURL:'https://my-json-server.typicode.com/braianchincho/crud-productos'
});

export default clienteAxios;