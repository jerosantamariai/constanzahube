import React, { useState } from 'react';
import AparicionesEnPrensa from '../img/aparicionesenprensa.png';
import Collage from '../components/prensa.jsx';

const Prensa = props => {
    const [multiplicador, setMultiplicador] = useState(1)
    function mapcollage() {
        let x = 8 * multiplicador;
        let y = [];
        for (let i = 0; i < x; i++) {
            if (Collage[i] !== undefined)
                y.push(<img src={Collage[i]} id="homeimg" />)

        }
        return y;
    }
    return (
        <div className="prensa" id="prensa">
            <div className="row">
                <div className="col">
                    <img src={AparicionesEnPrensa} alt="aparicionesenprensa" className="aparicionesenprensa"/>
                </div>
            </div>
            <div className="row text-center">
                <div className="col">
                    {
                        mapcollage()
                    }
                </div>
            </div>

            <div className="row d-flex justify-content-center">
                {
                    Collage.length > 8 * multiplicador ? (
                        <div className="row">
                            <div className="col text-center">
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