<<<<<<< HEAD
import React, { useState } from 'react';
// import Form from './components/Form';
import Search from './components/Search';
// import Map from './components/Map';
=======
>>>>>>> ec779714855e7f958fdf9b2b297b73946412e77b
import { Route, BrowserRouter } from 'react-router-dom';
import React from 'react'; 
import Search from './components/Search';
import Results from './components/Results';
import Logo from './components/Logo';
import Home from "./components/Home";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

 

  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Search} />
          <Route path='/location/:query' component={Results} />
          {/* <MapCard /> */}
          {/* <CardList /> */}
          {/* <DateList /> */}
          {/* <DateModal /> */}
          {/* <NavBar /> */}
          {/* <Details /> */}
          <Home />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
