import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './views/LoginPage';
import './App.css';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <div style={{ marginTop: '2rem' }}>
          <Switch>
            <Route path='/login' component={LoginPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
