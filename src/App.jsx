import Home from "./Home";
import Veg from "./Veg";
import {BrowserRouter,Link,Routes,Route} from "react-router-dom";
import './App.css';
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import Purchasehistory from "./Purchasehistory";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import { useSelector } from "react-redux";
import AddTask from "./Task";
import Addition from "./Addition";
import Calculator from "./Calculator";
import Marks from "./Marks";
import Login from "./Login";
import Task from "./Task";
import GoogleLoginComponent from "./GoogleLoginComponent";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App(){
  const cart=useSelector((state)=>state.cart);
  const totalItems=cart.reduce((sum,item)=>sum+item.quantity,0);

  
  return(
    <>
   <h1> modify code</h1>
   <GoogleOAuthProvider clientId="331466654086-eaa2070ss0o4s5qcmv1pdv6n5mf65t6j.apps.googleusercontent.com">
   <GoogleLoginComponent/>
   </GoogleOAuthProvider>
   
   <BrowserRouter>
   {/* <Login />
    <Marks />
   <Calculator />
   <Task /> */}

   <Link to="/login">Login</Link>
   <Link to="/">Home</Link>
   <Link to="/veg">Veg Items</Link>
   <Link to="/nonveg">NonVeg Items</Link>
   <Link to="./Cart">Cart{totalItems}</Link>
   <Link to="/history">Purchasehistory</Link>
   <Link to="/aboutus">AboutUs</Link>
   <Link to="/contactus">ContactUs</Link>
    
  
   <Routes>
   <Route path="/login" element={<Login/>} />
    <Route path="/" element={<Home />} />
    <Route path="/veg" element={<Veg />} />
    <Route path="/nonveg" element={<NonVeg />} />
    <Route path="/Cart" element={<Cart />} />
    <Route path="/history" element={<Purchasehistory />} />
    <Route path="/aboutus" element={<AboutUs />} />
    <Route path="/contactus" element={<ContactUs />} />
    <Route path="/task" element={<Task />} />
    <Route path="/addition" element={<Addition/>} />
    <Route path="/calculator" element={<Calculator/>} />
    <Route path="/marks" element={<Marks/>} />
    
   </Routes>
   </BrowserRouter>
   
   </>
  )
}

export default App;