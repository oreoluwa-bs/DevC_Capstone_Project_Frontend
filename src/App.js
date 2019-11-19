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
            <Route exact path='/DevC_Capstone_Project_Frontend/' component={Dashboard} />
            <Route path='/DevC_Capstone_Project_Frontend/login' component={LoginPage} />
            <Route path='/DevC_Capstone_Project_Frontend/signup' component={SignupPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
