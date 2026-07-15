import { useState , useMemo } from "react";

function UseMemoPrac(){
    const [count, setCount] = useState(0);
    const [dark , setDark] = useState(null);
    
    function slowFunc(num){
        for(let i =0;i < 1000000000 ; i++){

        }
        return num * num;
    }
    let result = useMemo(() => {
        return slowFunc(count);
    },[count]);
    return (
        <>
        <p>{count}</p>
        <p>Result : {result}</p>
        <button onClick={() => setCount(count+1)}>Increment Count</button>
        <button onClick={() => setCount(count - 1)}>Decrement count</button>
        <button onClick={() => setDark(!dark)}>Toggle Themee</button>
        <h1>{dark ? "dark" : "light"}</h1>
        </>
    )
}


export default UseMemoPrac