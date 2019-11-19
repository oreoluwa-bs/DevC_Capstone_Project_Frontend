import React from 'react';
import { BrowserRouter, Switch, Route, useRouteMatch } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './views/LoginPage';
import SignupPage from './views/SignupPage';
import Dashboard from './views/Dashboard';
import './App.css';

function App() {
  const match = useRouteMatch();
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <div style={{ marginTop: '2rem' }}>
          <Switch>
            <Route exact path={`${match.url}/`} component={Dashboard} />
            <Route path={`${match.url}/login`}  component={LoginPage} />
            <Route path={`${match.url}/signup`}  component={SignupPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
