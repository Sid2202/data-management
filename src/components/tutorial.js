import React from 'react'
import {useNavigate} from "react-router-dom"
function Tutorial() {
    let navigate = useNavigate();
  return (
    <div>
      Tutorials

        <button onClick={() => {navigate("/add");}}>Back to add page</button>
    </div>

  )
}

export default Tutorial