import React from 'react'
import burger from '../assets/burger.jpg'

function Card(props) {
  return (
    <div className="w-full flex flex-row my-2 items-center bg-card rounded-2xl">
        <div className="m-4 w-1/3">
            <img className="" src={props.image} alt="burger" />
        </div>
        <div className="flex flex-col px-2">
            <div className="mt-3">
                <p className="font-semibold">{props.title}</p>
                <p className="font-light whitespace-pre-line">{props.desc}</p>
            </div>
            
            <div className="flex justify-between">
                <p className="font-medium text-xl"> 70 $</p>
                <p className="flex">
                    <button className="bg-orange text-wh text-3xl px-1 font-extrabold">+</button>
                    <p className="font-medium pt-1 px-3 text-xl">{props.qty}</p>
                    <button className="bg-orange text-wh px-2 text-3xl font-extrabold">-</button>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Card