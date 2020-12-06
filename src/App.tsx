// Imports
// React Imports
import React from 'react';
// Firebase imports
import firebase from "./Firebase";
// Component Imports
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Summary } from './components/Summary';
import { History } from './components/History';
import { AddTransaction } from './components/AddTransaction';
import { Footer } from './components/Footer';
// Functional Component Imports
import { GlobalProvider } from './functionalComponent/GlobalProvider';
// Styles Imports
import './App.css';

function App() {
  // Console token if notifactions allowed
  // This token to be used for testing of push notification
  const messaging = firebase.messaging();
  messaging.requestPermission().then(()=>{
      return messaging.getToken()
  }).then((token)=>{
      console.log('token :',token)
  })
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <Summary/>
        <History/>
        <AddTransaction/>
      </div>
      <Footer/>
    </GlobalProvider>
  );
}

export default App;
