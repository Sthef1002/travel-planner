import React, { useState } from 'react';
import Form from './components/Form';
import Search from './components/Search';
import Map from './components/Map';
import { Route, BrowserRouter } from 'react-router-dom';
import Results from './components/Results';
import Logo from './components/Logo';
import Home from "./components/Home";




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
          <Logo />
          {/* <NavBar /> */}
          {/* <Details /> */}
          <Home />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
