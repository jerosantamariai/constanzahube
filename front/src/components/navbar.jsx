import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Constanza Hube 2021</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/acercademi">ACERCA DE MÍ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/trabajoconstituyente">TRABAJO CONSTITUYENTE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/prensa">NOTICIAS/PRENSA</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/videos">VIDEOS</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link btn btn-outline-info rounded-pill" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;