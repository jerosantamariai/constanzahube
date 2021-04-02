import React from 'react';
// import Form from '../components/form';
import AcercaDeMi from '../views/acercademi';
// import ConiPrincipal from '../img/coniprincipal.jpg'
// import Logo from '../img/logo.png'
// import LogoQuieroSerConstiuyente from '../img/logoquieroserconstituyente.png'
import LogoUdi from '../img/logoudi.png'
import TrabajoConstituyente from './trabajoconstituyente';
import Pensamiento from './pensamiento';
import VotoSeguro from './votoseguro';
import Terreno from './terreno';
import Prensa from './prensa';
import FotoPrincipal from '../img/fotoinicio.png';

const Home = props => {
    return (
        <div className="home no-gutters">
            <div className="row no-gutters">
                {/* <div className="col-5">
                    <img src={ConiPrincipal} alt="ConiHube" className="coniprincipal w-100" />
                </div>
                <div className="col-7">
                    <img src={Logo} alt="logo" className="logo" />
                    <img src={LogoQuieroSerConstiuyente} alt="logoquieroserconstituyente" className="logoquieroserconstituyente" />
                    <div className="saludo">
                        <p>Con tu apoyo, sumado a mi humilde experiencia, podremos volver realidad el sueño de miles de chilenos: que el país tenga una constitución de futuro y que tú tengas una buena constitución para ti.</p>
                    </div>
                </div> */}
                <div className="col-10 offset-1 no-gutters principal">
                    <img src={FotoPrincipal} alt="fotoprincipal" className="fotoprincipal" />
                    <div>
                        <a href="http://www.udi.cl" target="_blank"><img src={LogoUdi} alt="logoudi" className="logoudi" /></a>
                    </div>
                </div>
            </div>
            <AcercaDeMi />
            <TrabajoConstituyente />
            <Pensamiento />
            <VotoSeguro />
            <Terreno />
            <Prensa />
            {/* <Form /> */}
        </div>
    );
}

export default Home;