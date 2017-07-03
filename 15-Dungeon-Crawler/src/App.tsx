import * as React from 'react';
import { Provider, connect } from 'react-redux';
import store from './redux/store';
import mapStateToProps from './redux/props';
import mapDispatchToProps from './redux/dispatcher';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

const Container = connect(mapStateToProps, mapDispatchToProps)(Main);

function App() {
  return (
    <div className="App">
      <Header />
      <Provider store={store}>
        <Container />
      </Provider>
      <Footer />
    </div>
  );
}

export default App;
