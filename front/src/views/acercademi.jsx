import React from 'react';
import ConiHube from '../img/conihube.jpg';

const AcercaDeMi = props => {
    return (
        <div className="acercaDeMi">
            <div className="yo-top d-flex">
                <div className="col-5 mens1">
                    <p>Tengo 34 años, soy abogada y profesora de Derecho Constitucional. Soy candidata a la Convención porque quiero asegurarme de que tú tengas una buena constitución.</p>
                    <p>Tengo un Magíster en Derecho Público, trabajé en el estudio de abogados Carey y soy directora del Foro Constitucional UC.</p>
                    <p>Tengo la experiencia necesaria para escribir la constitución que Chile necesita. Una constitución que ponga a la persona en el centro, que defienda a la familia, incentive la participación privada y regule los límites del Estado.</p>
                    <p>En 2017, mientras se discutía la ley de aborto en 3 causales, defendí férreamente la objeción de conciencia y aún cuando perdimos la guerra, logramos ganar esa batalla, y mi compromiso siempre estará con la defensa de la vida.</p>
                </div>
                <div className="col-7 foto">
                    <img src={ConiHube} alt="Constanza Hube" className="fotoConiHube" />
                </div>
            </div>
            <div className="mens2">
                <p>Soy una mujer joven, valiente y preparada para enfrentar lo que se viene. Si me apoyas, pelearé contra todas las ideologías que quieren destruir la familia y que buscan imponer una visión de sociedad en la que las personas son vistas como meros individuos. Yo en cambio, creo fielmente en las personas y en su potencial creador y transformador. Creo en una economía libre, en la defensa de la propiedad privada y en la existencia del Tribunal Constitucional. Y creo firmemente en que el Estado está al servicio de la persona humana.</p>
                <p>Soy Constanza Hube y quiero ser constituyente. Y con tu apoyo, sumado a mi humilde experiencia, podremos volver realidad el sueño de miles de chilenos: que el país tenga una constitución de futuro y que tú tengas una buena constitución para ti. </p>
            </div>
        </div>
    );
}

export default AcercaDeMi;