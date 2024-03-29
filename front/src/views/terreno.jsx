import React, { useState } from 'react';
import QuieroEscucharte from '../img/quieroescucharte.png';
import Collage from '../components/collage.jsx';

const Terreno = props => {
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
        <div className="terreno no-gutters" id="terreno">
            <div className="row no-gutters">
                <div className="col no-gutters">
                    <img src={QuieroEscucharte} alt="quieroescucharte" className="quieroescucharte"/>
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
                        <div className="row no-gutters no-gutters">
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

export default Terreno;