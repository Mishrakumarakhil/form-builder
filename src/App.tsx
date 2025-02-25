import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { HomePage } from './components/index';


function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
