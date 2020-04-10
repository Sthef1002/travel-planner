import { Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Results from './components/Results';
import Logo from './components/Logo';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

function App() {

 return (
    <div>
        <div>
          <NavBar />
        </div>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/location/:query' component={Results} />
          {/* <CardList /> */}
          {/* <DateList /> */}
          {/* <DateModal /> */}
          {/* <Details /> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;