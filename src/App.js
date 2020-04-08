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
