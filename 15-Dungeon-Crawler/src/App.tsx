import * as React from 'react';
import Header from './components/Header';
import ConnectedMain from './components/Main';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <ConnectedMain />
    <Footer />
  </div>
);

export default App;
