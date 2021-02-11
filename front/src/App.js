import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';
import injectContext from './store/appContext';
import AcercaDeMi from './views/acercademi';
import Home from './views/home';
import Login from './views/login';
import notFound from './views/notfound';
import QueDefendere from './views/quedefendere';
import Terreno from './views/terreno';
import TrabajoConstituyente from './views/trabajoconstituyente';
import VotoSeguro from './views/votoseguro';


function App() {

  return (
    <div className="App" >
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/acercademi" component={AcercaDeMi} />
          <Route exact path="/trabajoconstituyente" component={TrabajoConstituyente} />
          <Route exact path="/que_voy_a_defender" component={QueDefendere} />
          <Route exact path="/voto_seguro" component={VotoSeguro} />
          <Route exact path="/terreno" component={Terreno} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route component={notFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
