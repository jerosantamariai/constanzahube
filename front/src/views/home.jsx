import React from 'react';
import Form from '../components/form';
import AcercaDeMi from '../views/acercademi';
import ConiPrincipal from '../img/coniprincipal.jpg'
import Logo from '../img/logo.png'
import LogoQuieroSerConstiuyente from '../img/logoquieroserconstituyente.png'
import LogoUdi from '../img/logoudi.png'
import TrabajoConstituyente from './trabajoconstituyente';
import Pensamiento from './pensamiento';

const Home = props => {
    return (
        <div className="home">
            <div className="row">
                <div className="col-5">
                    <img src={ConiPrincipal} alt="ConiHube" className="coniprincipal w-100" />
                </div>
                <div className="col-7">
                    <img src={Logo} alt="logo" className="logo" />
                    <img src={LogoQuieroSerConstiuyente} alt="logoquieroserconstituyente" className="logoquieroserconstituyente" />
                    <div className="saludo">
                        <p>Con tu apoyo, sumado a mi humilde experiencia, podremos volver realidad el sueño de miles de chilenos: que el país tenga una constitución de futuro y que tú tengas una buena constitución para ti.</p>
                    </div>
                    <img src={LogoUdi} alt="logoudi" className="logoudi" />
                </div>
            </div>
            <AcercaDeMi />
            <TrabajoConstituyente />
            <Pensamiento />
            <Form />
        </div>
    );
}

export default Home;