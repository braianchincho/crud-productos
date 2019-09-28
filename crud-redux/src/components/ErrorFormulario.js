import React from 'react';
const ErrorForm = ({ error , mensaje }) => {
    if(error) {
        return ( 
            <div className="font-weigth-bold alert alert-danger 
             text-center mt-4">
                 {mensaje}
            </div>
        );
    } else {
        return null;
    }

}
 
export default ErrorForm;