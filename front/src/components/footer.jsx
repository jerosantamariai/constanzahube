import React from 'react';

const Footer = props => {
    return (
        <footer>
            <div className="d-flex justify-content-center py-4">
                <a href="www.instagram.com/constanzahube.constituyente" target="_blank"><i className="fab fa-instagram fa-3x mr-4"></i></a>
                <a href="www.facebook.com/constanzahube.constituyente" target="_blank"><i className="fab fa-facebook fa-3x mr-4"></i></a>
                <a href="www.twitter.com/conihube" target="_blank"><i className="fab fa-twitter-square fa-3x"></i></a>
            </div>
            <hr className="w-75 mx-auto" />
            <div className="d-flex justify-content-center">
                <p className="firma">Diseñado por <strong><a href="http://www.santamariai.cl">JEROSANTAMARIAI</a></strong></p>
            </div>
        </footer>
    );
}

export default Footer;