import {useState} from 'react'
import http from "./http-common"
import {Link, useNavigate } from "react-router-dom"
import App from "./App"
import { useRecoilState } from 'recoil'
import { userState } from './atoms/user'


function Home() {
  return (
    <div className="h-screen w-screen bg-yellow-500 flex flex-col justify-center items-center">
        <img src={require('./assets/dish_3437501.png')} className="w-1/3" alt="logo" />
        <h1 className="text-4xl text-white font-mono font-bold">
            <Link to ="/customer">HungryPanda🐼</Link>
        </h1>
        <p className="text-white p-2">
            Quick ordering at your favourite restaurant!
        </p>
        <Link to="/customer">
            <button className="bg-white p-2 px-4 m-3 rounded-lg font-medium">
                Order Now!
            </button>
        </Link>
        <p className="text-white p-2">
        If you are a Restaurant Manager
        </p>
        <Link to="/menu">
            <button className="bg-white p-2 px-4 m-1 rounded-lg font-medium">
                Know my restaurant
            </button>
        </Link>
    </div>
  )
}

export default Home