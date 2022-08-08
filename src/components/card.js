import React from "react";
import burger from "../assets/burger.jpg";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { totalState } from "../atoms/total";

function Card(props) {
  const [total, setTotal] = useRecoilState(totalState);

  
  const [quantity, setQuantity] = useState(10)

  const data={
    amt: quantity*props.price 
  }
//   const getQuantity = ({id}) => {
//     var res = total.map((item) => {
//         if(item['id'] === id)
//             return item.quantity
//         else return 0
//     })
//     console.log(res)
//   };

  const Update = () => {
    setQuantity(quantity+1)
    props.passData(data)
    // var quantity = getQuantity(id)
    // let item = {
    //   id: id,
    //   quantity: quantity + 1,
    //   amt: price * quantity,
    // };
    // setTotal(total+ price);
    // console.log(total);

  };
  const HandleSubs = () => {
    setTotal(total - props.price);
    console.log(total);
  };

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
          <p className="font-medium text-xl">{props.price}</p>
          <div className="flex">
            <button
              className="bg-orange text-wh text-3xl px-1 font-extrabold"
              onClick={Update}
            >
              +
            </button>
            <p className="font-medium pt-1 px-3 text-xl">{quantity}</p>
            <button
              className="bg-orange text-wh px-2 text-3xl font-extrabold"
              onClick={HandleSubs}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
