import * as React from 'react';
import * as Header from './components/Header';
import * as Main from './components/Main';
import * as Footer from './components/Footer';
import './App.css';

function App(props: object) {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
