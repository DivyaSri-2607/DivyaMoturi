import { useRef } from "react";

function Marks(){
    const mathRef=useRef(null);
    const sciRef=useRef(null);
    const socRef=useRef(null);
    const resRef=useRef(null);
    const avgRef=useRef(null);
    const handleAction=()=>{

        const n1=parseFloat(mathRef.current.value);
        const n2=parseFloat(sciRef.current.value);
        const n3=parseFloat(socRef.current.value);

       const sum=n1+n2+n3;
       const avg=sum/3;

       resRef.current.value=sum;
       avgRef.current.value=avg;

    }
    return(
        <div>
            <h1>total Marks</h1>
            <label>Maths marks :</label>
            <input ref={mathRef} type="number" placeholder="maths" required/><br/>
            <label>Science marks :</label>
            <input ref={sciRef} type="number" placeholder="sciece" required/><br/>
            <label>Social Marks</label>
            <input ref={socRef} type="number" placeholder="social" required/><br/>
            <button onClick={handleAction} type="button" >sum</button>
            <label>total Marks</label>
            <input ref={resRef} type="text" placeholder="res" readOnly/><br/><br />
            <label>Average</label>
            <input ref={avgRef} type="text" placeholder="avrege"  readOnly/><br/>

        </div>
    )
}
export default Marks;