import * as React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import * as red from './redux/reducers';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Provider store={store}>
        <Main
          player={red.defaultPlayerState}
          enemies={red.defaultEnemyArray}
          gameState={red.defaultGameState}
          log={red.openingLogMessage}
        />
      </Provider>
      <Footer />
    </div>
  );
}

export default App;
