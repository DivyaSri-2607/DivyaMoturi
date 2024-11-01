import { useRef } from "react";

function Login(){
    const nameRef=useRef(null);
    const passRef=useRef(null);
     
    const handleAction1=()=>{
    const name= nameRef.current.value;
    const password=passRef.current.value;

    if(name=="Divya" && password=="Divya@2607"){
        alert("login successfully");
    }
    else{
        alert("login failed");
    }
    }
    return(
        <>
        <div>
            <h2>Login page</h2>
            <label>Enter name:</label>
            <input ref={nameRef} type="text"  placeholder="enter name" required /><br /><br />
            <label>Enter password</label>
            <input ref={passRef}  type="password" placeholder="enter password" required/><br /><br />
            
            <button type="button" onClick={handleAction1}>submit</button>
           
        </div>
        </>
    )  
}
export default Login;