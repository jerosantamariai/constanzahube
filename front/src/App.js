import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';
import injectContext from './store/appContext';
import AcercaDeMi from './views/acercademi';
import Home from './views/home';
import Login from './views/login';
import notFound from './views/notfound';
import Prensa from './views/prensa';
import TrabajoConstituyente from './views/trabajoconstituyente';
import Videos from './views/videos';


function App() {

  return (
    <div className="App" >
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/acercademi" component={AcercaDeMi} />
          <Route exact path="/trabajoconstituyente" component={TrabajoConstituyente} />
          <Route exact path="/prensa" component={Prensa} />
          <Route exact path="/videos" component={Videos} />
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
