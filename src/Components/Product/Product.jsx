import { useState } from "react"

export default function  Product () 

{
    let [count , setcount] = useState (0);

    function changecount (){
        setcount(Math.random())
    }
    
    return <>

    <h1 >hello from product component</h1>

    <h1> {count} </h1>

    <button onClick={changecount} className="btn btn-info">change count</button>
    

    </>



}

