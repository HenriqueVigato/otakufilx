import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Details from './pages/Details/index';
import CadastraVideo from './pages/cadastro/Video/index';
import CadastraCategoria from './pages/cadastro/Categoria';

const Pagina404 = () => (<div> Página 404</div>);

ReactDOM.render(

  <BrowserRouter>
    <Switch>

      <Route path="/" component={Home} exact />
      <Route path="/details" component={Details} />
      <Route path="/cadastro/video" component={CadastraVideo}/>
      <Route path="/cadastro/categoria" component={CadastraCategoria}/>
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);
