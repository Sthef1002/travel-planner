import React, { useState } from 'react';
// import Form from './components/Form';
import Search from './components/Search';
// import Map from './components/Map';
import { Route, BrowserRouter } from 'react-router-dom';
import Results from './components/Results';




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
          {/* <Logo /> */}
          {/* <NavBar /> */}
          {/* <Details /> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
