import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
        <Route exact path='/' element={<News pageSize={5} category="general" country="in" key="general"/>} ></Route>
        <Route exact path='/health' element={<News pageSize={5} category="health" country="in" key="health"/>} ></Route>
        <Route exact path='/business' element={<News pageSize={5} category="business" country="in" key="business"/>} ></Route>
        <Route exact path='/science' element={<News pageSize={5} category="science" country="in" key="science"/>} ></Route>
        <Route exact path='/sports' element={<News pageSize={5} category="sports" country="in" key="sports"/>} ></Route>
        <Route exact path='/technology' element={<News pageSize={5} category="technology" country="in" key="technology"/>} ></Route>
        <Route exact path='/entertainment' element={<News pageSize={5} category="entertainment" country="in" key="entertainment"/>} ></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}
