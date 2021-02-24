import React from 'react';
import ConstitucionDeFuturo from '../img/constituciondefuturo.png';
import UnoPensamiento from '../img/unopensamiento.png';
import DosPensamiento from '../img/dospensamiento.png';
import TresPensamiento from '../img/trespensamiento.png';
import CuatroPensamiento from '../img/cuatropensamiento.png';
import CincoPensamiento from '../img/cincopensamiento.png';

const TrabajoConstituyente = props => {
    return (
        <div className="trabajoConstituyente col-md-8 offset-md-2 my-5 py-5" id="constituciondefuturo">
            <div className="row pb-5">
                <div className="col-6 offset-3">
                    <img src={ConstitucionDeFuturo} alt="constituciondefuturo" className="constituciondefuturo" />
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-6">
                    <div className="pensamiento d-flex">
                        <img src={UnoPensamiento} alt="primer_pensamiento" className="unpensamiento" />
                        <div>
                            <h6>UNA QUE PONGA A LA PERSONA EN EL CENTRO.</h6>
                            <p>Lo que todo Estado debe hacer es ubicar al ciudadano como centro y foco de la actividad pública. Es perfectamente posible de compatibilizar un Estado eficaz para cumplir con sus tareas, con una ciudadanía activa y empoderada, que tome en sus propias manos los desafíos que Chile tiene hoy.</p>
                        </div>
                    </div>
                    <div className="pensamiento d-flex">
                        <img src={DosPensamiento} alt="segundo_pensamiento" className="dospensamiento" />
                        <div>
                            <h6>UNA QUE DEFIENDA A LA FAMILIA.</h6>
                            <p>La familia es el núcleo de la sociedad, es la base donde nos formamos todos, donde aprendemos nuestros valores, principios y formas de ver la vida. Es una empresa que parte entre dos personas pero impacta en todo el país con las decisiones que toman entre ellos, las que pueden parecer pequeñas, pero siembran la semilla de una comunidad que mira a futuro, dejando un legado propio.</p>
                        </div>
                    </div>
                    <div className="pensamiento d-flex">
                        <img src={TresPensamiento} alt="tercer_pensamiento" className="trespensamiento" />
                        <div>
                            <h6>UNA QUE PROMUEVA LA ACCIÓN DE LOS PRIVADOS.</h6>
                            <p>Tú, yo y cualquier persona debe saber que sus decisiones, motivaciones y acciones tienen un impacto real en la sociedad. En un país donde existen urgencias sociales reales, el Estado debe</p>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="pensamientocont d-flex">
                        <p>comprender que todos estamos llamados a comprometernos con las soluciones a los problemas de Chile hoy en día. Crear, emprender y actuar deben ser cosas que podamos hacer con plena confianza en el Chile del mañana.</p>
                    </div>
                <div className="pensamiento d-flex">
                    <img src={CuatroPensamiento} alt="cuarto_pensamiento" className="cuatropensamiento" />
                    <div>
                        <h6>UNA QUE PONGA AL ESTADO AL SERVICIO DE LOS DEMÁS.</h6>
                        <p>El Estado está al servicio de la persona humana, y no ella al servicio del Estado. Por eso, todos sus servicios, acciones y decisiones se deben tomar pensando en lo que es mejor para los chilenos, sus necesidades, sus sueños y esperanzas, su seguridad y siempre su dignidad.</p>
                    </div>
                </div>
                <div className="pensamiento d-flex">
                    <img src={CincoPensamiento} alt="quinto_pensamiento" className="cincopensamiento" />
                    <div>
                        <h6>UNA QUE PROMUEVA LA ACCIÓN DE LOS PRIVADOS.</h6>
                        <p>Tú, yo y cualquier persona debe saber que sus decisiones, motivaciones y acciones tienen un impacto real en la sociedad. En un país donde existen urgencias sociales reales, el Estado debe comprender que todos estamos llamados a comprometernos con las soluciones a los problemas de Chile hoy en día. Crear, emprender y actuar deben ser cosas que podamos hacer con plena confianza en el Chile del mañana.</p>
                    </div>
                </div>
            </div>
        </div>

        </div >
    );
}

export default TrabajoConstituyente;