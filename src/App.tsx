// Imports
// React Imports
import React from 'react';
// Component Imports
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Body } from './components/Body';
// Styles Imports
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Body/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
