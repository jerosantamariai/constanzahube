import React from 'react';
import Piensa1 from '../img/piensa1.png';
import Piensa2 from '../img/piensa2.png';
import Piensa3 from '../img/piensa3.png';
import Piensa4 from '../img/piensa4.png';
import Piensa5 from '../img/piensa5.png';
import Cierre from '../img/cierreacercademi.png';

const Pensamiento = props => {
    return (
        <>
            <div className="pensamiento col-md-10 offset-md-1 my-5" id="pensamiento">
                <div className="row">
                    <h3 className="pensamientotitulo">¿QUÉ DERECHO, PRINCIPIOS O VALORES SON LOS QUE VOY A DEFENDER?</h3>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-2">
                        <hr />
                        <img src={Piensa1} alt="piensa1" className="piensa1 mt-5" />
                        <h5 className="py-3">DERECHO A LA VIDA</h5>
                        <p>Como ya lo he hecho anteriormente, protegeré el derecho a la vida del que está por nacer en la nueva constitución, porque es el primer derecho fundamental que tenemos como personas. Sin embargo, también hay que proteger la vida de quienes viven en Chile, apuntando siempre a resguardar su dignidad como personas.</p>
                    </div>
                    <div className="col-2">
                        <hr />
                        <img src={Piensa2} alt="piensa2" className="piensa2 mt-5" />
                        <h5 className="py-3">DERECHO A LA SEGURIDAD</h5>
                        <p>Si queremos vivir en paz, buscando desarrollarnos como personas en todos los ámbitos, debemos resguardar el derecho a la seguridad. Esto implica implementarlo en la constitución, para dar la certeza de que la seguridad de todos y cada uno de los chilenos será una prioridad para el Estado.</p>
                    </div>
                    <div className="col-2">
                        <hr />
                        <img src={Piensa3} alt="piensa3" className="piensa3 mt-5" />
                        <h5 className="py-3">PROPIEDAD PRIVADA</h5>
                        <p>La propiedad privada nos asegura el libre uso de nuestros bienes propios, y gracias a ella tenemos hogar, bienes materiales, herencia, autoría intelectual de arte y cultura, y mucho más. Por eso, voy a luchar por asegurar tu derecho a usar libremente lo que te sea propio, y que así se quedará a excepción de una necesidad última.</p>
                    </div>
                    <div className="col-2">
                        <hr />
                        <img src={Piensa4} alt="piensa4" className="piensa4 mt-5" />
                        <h5 className="py-3">LIBRE EMPRENDIMIENTO</h5>
                        <p>Una de nuestras libertades más esenciales, la creación y el desarrollo de nuestros proyectos económicos y sociales que puedan contribuir - con nuestro propio sello y legado - a las soluciones de los problemas del Chile de hoy. Asegurar esa libertad no solo garantiza nuestra autonomía frente al Estado, también reafirma nuestro compromiso con los chilenos.</p>
                    </div>
                    <div className="col-2">
                        <hr />
                        <img src={Piensa5} alt="piensa5" className="piensa5 mt-5" />
                        <h5 className="py-3">LIBERTAD DE ENSEÑANZA</h5>
                        <p>Una de nuestras libertades más esenciales, la creación y el desarrollo de nuestros proyectos económicos y sociales que puedan contribuir - con nuestro propio sello y legado - a las soluciones de los problemas del Chile de hoy. Asegurar esa libertad no solo garantiza nuestra autonomía frente al Estado, también reafirma nuestro compromiso con los chilenos.</p>
                    </div>
                </div>
            </div>
            <img src={Cierre} alt="una_constitucion_para_ti" className="cierrepiensa pb-5" />
        </>
    );
}

export default Pensamiento;