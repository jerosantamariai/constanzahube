import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';
import injectContext from './store/appContext';
import Home from './views/home';
import Login from './views/login';
import notFound from './views/notfound';


function App() {

  return (
    <div className="App" >
      <BrowserRouter>
        <Navbar />
        <Switch>
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
