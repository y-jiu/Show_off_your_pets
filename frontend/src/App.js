import { BrowserRouter, Route, Switch } from 'react-dom';
import * as React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
// import ReactDOM from 'react-dom';
// import { Component } from 'react';


const App = () => {

  return (
    <div className="App">
      <LoginPage />
      {/* <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
        </Switch>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
