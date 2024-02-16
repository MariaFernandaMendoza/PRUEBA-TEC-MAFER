import React from 'react';
import { Provider } from 'react-redux'; 
import store from './redux/store'; 
import Header from './components/Header';
import HomeContent from './components/HomeContent';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <HomeContent />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
