import { useRef } from "react";

function UseRefPrac(){
    const inputRef = useRef(null);
    const handleFocus = () =>{
        inputRef.current.value = "";
    }
    return (
        <>
        <input ref={inputRef} placeholder="Enter Your name"/>
        <button onClick={handleFocus}>Click me</button>
        </>
    )
}
export default UseRefPrac