import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Provider store={store}>
        <Main />
      </Provider>
      <Footer />
    </div>
  );
}

export default App;
