import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style/App.css';
import Home from './pages/Home';
import Login from './pages/Login';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/login' element={ <Login />} />
      </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
