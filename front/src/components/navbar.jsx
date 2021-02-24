import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#acercademi">ACERCA DE MÍ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#constituciondefuturo">CONSTITUCIÓN DEL FUTURO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#pensamiento">PENSAMIENTO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tuvotoseguro">#TUVOTOSEGURO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#enterreno">EN TERRENO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#prensa">PRENSA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#sigueme">SÍGUEME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#apoyama">APÓYAME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#hablemos">HABLÉMOS</a>
                        </li>
                    </ul>
                    {/* <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link btn btn-outline-info rounded-pill" to="/login">Login</Link>
                        </li>
                    </ul> */}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;