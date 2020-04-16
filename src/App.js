import { Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Results from './components/Results';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';


function App() {

 return (

    <BrowserRouter>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/:placeholder/*' component={NavBar} />
        <Route path='/location/:query' component={Results} />
      </div>
    </BrowserRouter>
 
  );
}

export default App;