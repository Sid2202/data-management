import {useState, useEffect} from 'react'
import http from "./http-common"
import { useNavigate } from "react-router-dom"
import App from "./App"
import { useRecoilState } from 'recoil'
import { userState } from './atoms/user'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Customer() {
  const [name, setName] = useState("")
  const [age, setAge] = useState()
  const [num,setNum] = useState()
  const [cid, setCid] = useState("");
  const [user, setUser] = useRecoilState(userState)
  // const history = useHistory();

  const navigate = useNavigate()
  useEffect(() => {
    console.log('cid is:', cid);
  }, [cid]);

  const handleChangename =(event) =>{
    setName(event.target.value) 
  }
  const handleChangeage =(event) =>{
    setAge(event.target.value) 
  }
  const handleChangenum =(event) =>{
    setNum(event.target.value) 
  }
  const sendCid = () =>{
    navigate('/menu', { state: { cid: cid } });
  }
  const addCustomer = async()=>{
    try{
      var data = {
        name: name,
        age : age,
        table : num
      };
    
    const res =await http.post('/add_user', data)
    setCid(res.data);
    sendCid()
    // toast("Lets start ordering now!");
    // navigate('/menu', { state: { cid: cid } });
    }catch (error) {
      console.error('Error posting data:', error);
    }
  }
  return (
    <div className="h-screen w-screen bg-yellow-500 flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl text-white font-mono font-bold">Welcome to HungryPanda✨</h1>
      <p className='text-white p-2 text-lg'>Let us know you better to make sure you get the best offers!🤑</p>

      <div className='flex flex-col justify-center items-center text-center'>
        <div className='p-2 text-white text-lg'>
          Your name is : <input className=' text-center bg-transparent outline-none border-b font-semibold' type="text"  value={name} onChange={handleChangename} />
        </div>
        <div className='p-2 text-white text-lg'>
          Your age is: <input className=' text-center bg-transparent outline-none border-b font-semibold' type="text" value={age} onChange={handleChangeage} />
        </div>
        <div className='p-2 text-white text-lg'>
          Table number : <input className=' text-center bg-transparent outline-none border-b font-semibold' type="text" value={num} onChange={handleChangenum} />
        </div>
        <button className="bg-white p-2 px-4 m-3 rounded-lg font-medium" onClick={addCustomer}>
          Explore our menu!
        </button>

      </div>

    </div>
  )
}

export default Customer