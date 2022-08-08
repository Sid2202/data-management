import {BrowserRouter as Router,
  Routes,
  Route,
  Link} from "react-router-dom"
import {useState, useEffect} from 'react'
import Menu from "./Menu"
import Customer from "./Customer"

import "./App.css";

function App(props) {
  const [cid, setCid] = useState();
  useEffect(()=>{
    setCid(props.cid);
  },[])
  
  return (
    <Router>
        <p><Link to ="/customer">Heyy! Welcome! </Link></p>
      <div className="routes">
          <Routes>
            <Route exact path="/menu" element={<Menu data={cid} />} />
            <Route exact path="/customer" element={<Customer />} />
          </Routes>
        </div>
  </Router>
  );
}

export default App;
