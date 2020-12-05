// Imports
// React Imports
import React from 'react';
// Component Imports
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Summary } from './components/Summary';
import { History } from './components/History';
import { AddTransaction } from './components/AddTransaction';
import { Footer } from './components/Footer';
// Styles Imports
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
        <Summary/>
        <History/>
        <AddTransaction/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
