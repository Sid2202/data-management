import {useState} from 'react'
import http from "./http-common"
import {Link, useNavigate } from "react-router-dom"
import App from "./App"
import { useRecoilState } from 'recoil'
import { userState } from './atoms/user'


function Customer() {
  const [name, setName] = useState("")
  const [age, setAge] = useState()
  const [num,setNum] = useState()
  const [cid, setCid] = useState();
  const [user, setUser] = useRecoilState(userState)

  const navigate = useNavigate()

  const handleChangename =(event) =>{
    setName(event.target.value) 
  }
  const handleChangeage =(event) =>{
    setAge(event.target.value) 
  }
  const handleChangenum =(event) =>{
    setNum(event.target.value) 
  }
  const addCustomer = async()=>{
    
    var data = {
      name: name,
      age : age,
      num : num
    };
    var res =await http.post("/cust", data)
    setCid(res.data.cid);
    setUser({
      cid: res.data.cid
    })
    navigate('/menu')
  }
  return (
    <div>
        <div className="flex flex-col items-center bg-wh w-screen h-screen p-2">
        <div className="flex flex-col">
          {/* <App cid={cid} /> */}
          Hey!
          Your name is : <input type="text" value={name} onChange={handleChangename} />
          Your age is: <input type="text" value={age} onChange={handleChangeage} />
          Table number that you are seated in: <input type="text" value={num} onChange={handleChangenum} />
          <button onClick={addCustomer}>
            Explore our menu!</button>
        </div>
        </div>
    </div>
  )
}

export default Customer