
import * as React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import Gallery from './pages/Gallery';
import Petoftheday from './pages/Petoftheday';
import Fostering from './pages/Fostering';
import { createTheme, ThemeProvider } from '@material-ui/core'
const App = () => {
  const theme = createTheme({
    palette: {
      type: "dark",
    }
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element = {LoginPage()}></Route>
            <Route path="/main" element = {MainPage()} ></Route>
            <Route path="/gallery" element = {Gallery()} ></Route>
            <Route path="/petoftheday" element = {Petoftheday()} ></Route>
            <Route path="/fostering" element = {Fostering()} ></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
