import {useEffect, useState} from 'react'
import burger from "./assets/burger.jpg";
import pizza from "./assets/pizza.jpg";
import pasta from "./assets/pasta.jpg";
import http from "./http-common"
import { useRecoilState } from 'recoil';
import { userState } from './atoms/user';

function Menu(props) {

  const [user] = useRecoilState(userState)
    const [total, setTotal] = useState(0);
    const [q1, setQ1] = useState(0);
    const [q2, setQ2] = useState(0);
    const [q3, setQ3] = useState(0);
    const [q4, setQ4] = useState(0);

    const Cards = [
        {
          id: 0,
          title: "Burger Burst",
          desc: "Veggies and cheese to go MmmMmm!",
          price: 100,
          amt: 0,
          image: burger,
          // passdata: passData
        },
        {
          id: 1,
          title: "White sauce Pasta",
          desc: "Spicy white sauce pasta ",
          price: 70,
          amt:0,
          image: pasta,
          // passdata: passData
        },
        {
          id: 2,
          title: "White sauce Pasta",
          desc: "Spicy white sauce pasta ",
          price: 80,
          amt:0,
          image: pasta,
          // passdata: passData
        },
      ];
      const HandleSubs=(e)=>{
        let n =e.target.id
        if(n==="1" && q1>0){
          setQ1(q1-1)
        }if(n==="2" && q2>0){
        setQ2(q2-1)
        }if(n==="3" && q3>0){
        setQ3(q3-1)
        }if(n==="4" && q4>0){
        setQ4(q4-1)
        }
        
      }
      const HandleAdd=(e)=>{
        let n =e.target.id
        if(n==="1"){
          setQ1(q1+1)
        }if(n==="2"){
        setQ2(q2+1)
        }if(n==="3"){
        setQ3(q3+1)
        }if(n==="4"){
        setQ4(q4+1)
        }
      }
      useEffect(() => {
        setTotal(q1*100+q2*150+q3*200+q4*50)
      }, [q1,q2,q3,q4])
    
      const addtuple = async()=> {
        if(q1>0){
          var data1 = {
            item: "Burger Burst",
            amount: 100,
            quantity: q1,
            total: (q1*100),
            cid: user.cid
          };
          await http.post("/add", data1)
        }
        if(q2>0){
          var data2 = {
            item: "Pizza",
            amount: 150,
            quantity: q2,
            total: (q2*150),
            cid: user.cid
          };
          await http.post("/add", data2)
        }
        if(q3>0){
          var data3 = {
            item: "White sauce pasta",
            amount: 200,
            quantity: q3,
            total: (q3*200),
            cid: user.cid
          };
          await http.post("/add", data3)
        }
        if(q4>0){
          var data4 = {
            item: "Choco lava cake",
            amount: 50,
            quantity: q4,
            total: (q4*100),
            cid: user.cid
          };
          await http.post("/add", data4)
        }
      }
  return (
    <div>
        <div>
          <div className="p-3">
            <p className="text-3xl font-semibold">Hungry Panda</p>
          </div>

          <div className="flex flex-col ">
            <h6>Grab your favourite meal here!</h6>
            {/* {Cards.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                desc={item.desc}
                price={item.price}
                image={item.image}
                amt={item.amt}
                passData={item.passData}
              />
            ))} */}
            <div className="w-full flex flex-row my-2 items-center bg-card rounded-2xl">
              <div className="m-4 w-1/3">
                <img className="" src={burger} alt="burger" />
              </div>
              <div className="flex flex-col px-2">
                <div className="mt-3">
                  <p className="font-semibold">Burger Burst</p>
                  <p className="font-light whitespace-pre-line">Veggies and cheese to go MmmMmm!</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-medium text-xl">100</p>
                  <div className="flex">
                    <button
                      className="bg-orange text-wh px-2 text-3xl font-extrabold" id="1"
                      onClick={HandleSubs}
                    >
                      -
                    </button>
                    <p className="font-medium pt-1 px-3 text-xl">{q1}</p>
                    <button
                      className="bg-orange text-wh text-3xl px-1 font-extrabold" id="1"
                      onClick={HandleAdd}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row my-2 items-center bg-card rounded-2xl">
              <div className="m-4 w-1/3">
                <img className="" src={pizza} alt="burger" />
              </div>
              <div className="flex flex-col px-2">
                <div className="mt-3">
                  <p className="font-semibold">Pizza</p>
                  <p className="font-light whitespace-pre-line">Double cheese burst pizza</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-medium text-xl">150</p>
                  <div className="flex">
                    <button
                      className="bg-orange text-wh px-2 text-3xl font-extrabold" id="2"
                      onClick={HandleSubs}
                    >
                      -
                    </button>
                    <p className="font-medium pt-1 px-3 text-xl">{q2}</p>
                    <button
                      className="bg-orange text-wh text-3xl px-1 font-extrabold" id="2"
                      onClick={HandleAdd}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row my-2 items-center bg-card rounded-2xl">
              <div className="m-4 w-1/3">
                <img className="" src={pasta} alt="burger" />
              </div>
              <div className="flex flex-col px-2">
                <div className="mt-3">
                  <p className="font-semibold">White Sauce pasta</p>
                  <p className="font-light whitespace-pre-line">Veggies and cheese to go MmmMmm!</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-medium text-xl">200</p>
                  <div className="flex">
                    <button
                      className="bg-orange text-wh px-2 text-3xl font-extrabold" id="3"
                      onClick={HandleSubs}
                    >
                      -
                    </button>
                    <p className="font-medium pt-1 px-3 text-xl">{q3}</p>
                    <button
                      className="bg-orange text-wh text-3xl px-1 font-extrabold" id="3"
                      onClick={HandleAdd}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row my-2 items-center bg-card rounded-2xl">
              <div className="m-4 w-1/3">
                <img className="" src={burger} alt="burger" />
              </div>
              <div className="flex flex-col px-2">
                <div className="mt-3">
                  <p className="font-semibold">Choco lava cupcakes</p>
                  <p className="font-light whitespace-pre-line">Oozing chocolate</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-medium text-xl">50</p>
                  <div className="flex">
                    <button
                      className="bg-orange text-wh px-2 text-3xl font-extrabold" id="4"
                      onClick={HandleSubs}
                    >
                      -
                    </button>
                    <p className="font-medium pt-1 px-3 text-xl">{q4}</p>
                    <button
                      className="bg-orange text-wh text-3xl px-1 font-extrabold" id="4"
                      onClick={HandleAdd}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

          <div className="flex w-1/2 flex-col">
            <div className="flex justify-between">
              <p className=" text-md">Net total</p>
              <p className=" text-md text-orange">₹ {total}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium text-xl">Total</p>
              <p className="font-medium text-xl text-orange">
                ₹ {0.05 * total + total}{" "}
              </p>
            </div>
          </div>

          <div className="mt-3">
            <button className="bg-orange p-3 rounded-xl text-wh text-md " onClick={() => addtuple()}>Place your Order!</button>
          </div>
        </div>
        </div>
      
    </div>
  )
}

export default Menu