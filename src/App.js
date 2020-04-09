import { Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Results from './components/Results';
import Logo from './components/Logo';
import 'bootstrap/dist/css/bootstrap.min.css';
​
​
function App() {
​
​
​
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/location/:query' component={Results} />
          {/* <MapCard /> */}
          {/* <CardList /> */}
          {/* <DateList /> */}
          {/* <DateModal /> */}
          {/* <NavBar /> */}
          {/* <Details /> */}
        </div>
      </BrowserRouter>
    </div>
  );
}
​
export default App;