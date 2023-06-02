import React from 'react'
import { useState } from 'react'


const Numberofproductbtn = () => {
    const [amount, Setamount]=useState(1)
    function add(){
   
      Setamount((num)=>{
       let initialnum= num+1
       if(initialnum >10) initialnum=1;
       return initialnum
      })
    }
    function minus(){
   
      Setamount((num)=>{
       let initialnum= num-1
       if(initialnum < 0) initialnum=1;
       return initialnum
      })
    }
  return (
    <div><div className="d-flex gap-3">
    <div className="fs-6">NO:</div>
    <button className="border-0 px-2 bg-danger rounded" onClick={minus}> -</button>
    <div>{amount}</div>
    <button className="border-0 px-2 bg-danger rounded" onClick={add}>+</button>
   </div></div>
  )
}

export default Numberofproductbtn