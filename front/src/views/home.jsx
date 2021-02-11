import React from 'react';
import Form from '../components/form';
import UnderConstruction from '../img/underconstruction.jpg'

const Home = props => {
    return (
        <div className="home">
            <img src={UnderConstruction} alt="Página en construcción" className="w-100" />
            <Form />

        </div>
    );
}

export default Home;