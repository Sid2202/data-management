import React, { Component } from "react";
import AddTutorial from "./components/add-tutorial";
import Tutorial from "./components/tutorial";
import TutorialsList from "./components/tutorials-list";
import Errorpage from "./components/errorpage.js"
import Card from "./components/card"
import burger from './assets/burger.jpg'
import pizza from './assets/pizza.jpg'
import pasta from './assets/pasta.jpg'

import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Link
} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {

  return (
    <Router>
      <div className="flex flex-col items-center bg-wh w-screen h-screen p-2">

        <div className="p-3">
          <h1>Hungry Panda</h1>
        </div>

        <div className="flex flex-col ">
            <h6>Grab your favourite meal here!</h6>
            <Card 
              title="Burger Burst"
              desc="Veggies and cheese to go MmmMmm!"
              qty="1"
              image={burger}
            />
            <Card 
              title="White sauce Pasta"
              desc="Spicy white sauce pasta "
              qty="1"
              image={pasta}
            />
            <Card 
              title="Burger Burst"
              desc="Veggies and cheese to go MmmMmm!"
              qty="1"
              image={pizza}
            />
        </div>

        <div className="flex w-1/2 flex-col">
          <div className="flex justify-between">
            <p className=" text-md">Net total</p>
            <p className=" text-md text-orange">100 $</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium text-xl">Total</p>
            <p className="font-medium text-xl text-orange">110 $</p>
          </div>
        
        </div>

        <div className="mt-3">
          <button className="bg-orange p-3 rounded-xl text-wh text-md ">Place your Order!</button>
        </div>

        <nav className="navbar">
            <Link to ="/add">Add</Link>
            <Link to ="/list">List</Link>
            <Link to ="/table">Table</Link>
        </nav>
          
        <div className="routes">
          <Routes>
            <Route path="/" />
            <Route path="/add" element={<AddTutorial />} />
            <Route path="/list" element={<TutorialsList />} />
            <Route path="/table" element={<Tutorial />} />
            <Route path="*" element={<Errorpage />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
  
}

export default App;
