import React from 'react';

const VotoSeguro = props => {
    return (
        <div className="votoseguro py-5 d-flex justify-content-center no-gutters" id="tuvotoseguro">
            <div className="row d-flex no-gutters">
                <div className="col-10 col-md-6 my-auto no-gutters">
                    <h2 className="azul">¿QUÉ SIGNIFICA</h2>
                    <h2 className="rojo">#TUVOTOSEGURO?</h2>
                </div>
                <div className="col-12 col-md-6 no-gutters">
                    <h5 className="tvsinicio"><span className="rojo">1.</span> QUE TE VOY A DAR LA SEGURIDAD DE QUE LA CONSTITUCIÓN QUEDARÁ BIEN.</h5>
                    <h5 className="tvscentro"><span className="azul">2.</span> QUE TE PUEDES IR A LA SEGURA SI VOTAS POR MÍ.</h5>
                    <h5 className="tvscentroesp"><span className="rojo">3.</span> QUE TE VOY A DEFENDER CONTRA LAS IDEOLOGÍAS DE IZQUIERDA.</h5>
                    <h5 className="tvscentro"><span className="azul">4.</span> QUE VOY A LUCHAR POR REPRESENTAR TUS INTERESES.</h5>
                    <h5 className="tvsfin"><span className="rojo">5.</span> QUE TUS HIJOS PODRÁN CRECER EN UN PAÍS LIBRE Y LLENO DE OPORTUNIDADES.</h5>
                </div>
            </div>
        </div>
    );
}

export default VotoSeguro;