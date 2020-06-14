import React from 'react';
import './App.css';

import {Provider} from 'react-redux';
import configureStore from './store/index'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

const store = configureStore(); 


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
        <Route exact path="/" component={()=><Login store ={store}/>} />
        <Route exact path="/signup" component={()=><Signup store ={store}/>} />
        <Route exact path="/dashboard" component={()=><Dashboard store ={store}/>} />
        
        </Router>
      
      </Provider>
    </div>
  );
}

export default App;
