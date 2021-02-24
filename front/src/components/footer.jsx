import React from 'react';
import CuentoContigo from '../img/cuentocontigo.png';
import CierreFooter from '../img/cierreacercademi.png';

const Footer = props => {
    return (
        <footer>
            <div className="headfoot py-5">
                <h3>¡SÍGUEME! ¡HABLEMOS!</h3>
            </div>


            <div className="d-flex justify-content-center py-5">
                <a href="www.instagram.com/constanzahube.constituyente" target="_blank"><i className="fab fa-instagram fa-3x mr-4"></i></a>
                <a href="www.facebook.com/constanzahube.constituyente" target="_blank"><i className="fab fa-facebook fa-3x mr-4"></i></a>
                <a href="www.twitter.com/conihube" target="_blank"><i className="fab fa-twitter-square fa-3x mr-4"></i></a>
                <a href="https://api.whatsapp.com/send?phone=56949303490" target="_blank"><i class="fab fa-whatsapp-square fa-3x"></i></a>
            </div>


            <div className="cuentocontigo text-center py-5">
                <img src={CierreFooter} alt="cierrefooter" className="cierrefooter" />
            </div>


            <div className="cuentocontigo text-center py-5">
                <img src={CuentoContigo} alt="cuentocontigo" className="cuentocontigo" />
            </div>


            <hr className="w-75 mx-auto" />
            <div className="d-flex justify-content-center">
                <p className="firma">Diseñado por <strong><a href="http://www.santamariai.cl">JEROSANTAMARIAI</a></strong></p>
            </div>
        </footer>
    );
}

export default Footer;