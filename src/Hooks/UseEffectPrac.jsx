import { useState,useEffect } from "react";

function UseEffectPrac(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count Changed");

    },[]); 
    return(
        <>
        <h1>{count}</h1>
        <button onClick={() => setCount(count+1)}>Increment</button>
        </>
    )
}

export default UseEffectPrac