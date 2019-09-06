import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Posts from "./component/Post"
import Postform from './component/Postform';
import store from './store';


class App extends Component {
  render(){
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
      <Postform />
      <Posts/>
        
      </header>


      
    </div>
    </Provider>
  );
  }
}

export default App;
