import {BrowserRouter as Router,
  Routes,
  Route,
  Link} from "react-router-dom"
import {useState, useEffect} from 'react'
import Menu from "./Menu"
import Customer from "./Customer"
import Home from "./Home"

import "./App.css";

function App(props) {
  const [cid, setCid] = useState();
  useEffect(()=>{
    setCid(props.cid);
  },[])
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        {/* <Route exact path="/menu" element={<Menu data={cid} />} /> */}
        <Route exact path="/menu" element={<Menu/>} />
        <Route exact path="/customer" element={<Customer/>} />
      </Routes>
    </Router>
  );
}

export default App;
