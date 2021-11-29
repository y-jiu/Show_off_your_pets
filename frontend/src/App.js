
import * as React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
// import ReactDOM from 'react-dom';
// import { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Switch } from 'react-dom';
import MainPage from './pages/MainPage';

const App = () => {

  return (
    <div className="App">
      {/* <LoginPage></LoginPage> */}
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element = {LoginPage()}></Route>
            <Route path="/main" element = {MainPage()} ></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
