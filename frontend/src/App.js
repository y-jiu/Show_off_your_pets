import * as React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Gallery from './pages/Gallery';
import Petoftheday from './pages/Petoftheday';
import { createTheme, ThemeProvider } from '@material-ui/core'

const App = () => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    }
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element = {LoginPage()}></Route>
            <Route path="/gallery" element = {Gallery()} ></Route>
            <Route path="/petoftheday" element = {Petoftheday()} ></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
