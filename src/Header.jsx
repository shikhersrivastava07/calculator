import { useState } from "react"
export default function Header()
{
const [style,setStyle]=useState("reactcalc")
    const [visible,setVisible]=useState(true)

function handleClick()
{
    setVisible((prev)=>!prev)
    setStyle((prevstyle)=>
    {
       return prevstyle ==="reactcalc" ? "reactcalc2" : "reactcalc"
    })
   
}





return(


<div className="buttonbackground">

<button className={style} onClick={handleClick}>React Calc</button>

<h2 className="text">{visible ? "This Project was created using React JS." : "The journey of a thousand miles begins with a single step." }</h2>

</div>
)
}