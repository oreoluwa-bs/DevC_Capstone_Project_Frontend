import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './views/LoginPage';
import SignupPage from './views/SignupPage';
import Dashboard from './views/Dashboard';
import './App.css';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <div style={{ marginTop: '2rem' }}>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/login' component={LoginPage} />
            <Route path='/signup' component={SignupPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;