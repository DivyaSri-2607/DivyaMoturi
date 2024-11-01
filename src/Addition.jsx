import { useRef } from "react";

function Addition()
{
    const num1Ref=useRef(null);
    const num2Ref=useRef(null);
    const resultRef=useRef(null);
    const handleAddition = ()=>{
        const num1=parseFloat(num1Ref.current.value);
        const num2=parseFloat(num2Ref.current.value);
        const sum = num1+num2;
        resultRef.current.value=sum;
        
    }
    return(
        <div>
            <h2>Addition Of Two Numbers</h2>
            <input ref={num1Ref}type="number"placeholder="Enter First Number"/>
            <input ref={num2Ref}type="number"placeholder="Enter Second Number"/>
            <button onClick ={handleAddition}>Add</button>
            <input ref={resultRef}type="text"placeholder="Result"readOnly/>
        </div>
    );
}
export default Addition;