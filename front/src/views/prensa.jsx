import React, { useState } from 'react';
import AparicionesEnPrensa from '../img/aparicionesenprensa.png';
import Collage from '../components/prensa.jsx';
import { Link } from 'react-router-dom';

const Prensa = props => {
    const [multiplicador, setMultiplicador] = useState(1)
    function mapcollage() {
        let x = 8 * multiplicador;
        let y = [];
        for (let i = 0; i < x; i++) {
            if (Collage[i] !== undefined)
                y.push(<Link to="/elmercurio"><img src={Collage[i]} id="homeimg" /></Link>)

        }
        return y;
    }
    return (
        <div className="prensa no-gutters" id="prensa">
            <div className="row no-gutters">
                <div className="col no-gutters">
                    <img src={AparicionesEnPrensa} alt="aparicionesenprensa" className="aparicionesenprensa"/>
                </div>
            </div>
            <div className="row text-center no-gutters">
                <div className="col no-gutters">
                    {
                        mapcollage()
                    }
                </div>
            </div>

            <div className="row d-flex justify-content-center no-gutters">
                {
                    Collage.length > 8 * multiplicador ? (
                        <div className="row no-gutters">
                            <div className="col text-center no-gutters">
                                <div className="btn btn-info mb-4" onClick={() => setMultiplicador(multiplicador + 1)}>Ver más...</div>
                            </div>
                        </div>
                    ) :
                        null
                }
            </div>
        </div>

    );
}

export default Prensa;