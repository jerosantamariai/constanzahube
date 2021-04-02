import React from 'react';
import { Link } from 'react-router-dom';
import ElMercurio1 from '../img/prensa/elmercurio1.jpg';

const ElMercurio = props => {
    return(
        <div className="elmercurio no-gutters">
            <div className="row no-gutters">
                <div className="col text-center no-gutters">
                    <img src={ElMercurio1} alt="elmercurio1" className="elmercuriophoto py-5 mx-auto" />
                    <Link to="/"><div className="btn btn-primary">Ir Atrás</div></Link>
                </div>
            </div>
        </div>
    );
}

export default ElMercurio