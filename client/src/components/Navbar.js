import React,{useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/carRepair.png';
import {UserContext} from '../App'


  
  

const Navbar=()=>{
  const {state,dispatch}=useContext(UserContext);
  const RenderNav=()=>{
    
      if(state){
        return(
          <>
      <li className="nav-item">
      <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
    </li>
  
    <li className="nav-item">
      <NavLink className="nav-link" to="/workshop">Register Workshop</NavLink>
    </li>
  
    <li className="nav-item">
      <NavLink className="nav-link" to="/nearbyWorkshops">Nearby Workshops</NavLink>
    </li>
  
    <li className="nav-item">
      <NavLink className="nav-link" to="/yourworkshop">Your Workshops</NavLink>
  
    </li>
  

    <div className="dropdown">
  <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    My Account
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
  <NavLink className="dropdown-item" to="/editaccount">Edit Account</NavLink>
  <NavLink className="dropdown-item" to="/logout">Logout</NavLink>
  </ul>
</div>
    </>
        )
    }
    else{
      return(
        <>
    <li className="nav-item">
      <NavLink className="nav-link" to="/signin">Login</NavLink>
    </li>
  
    <li className="nav-item">
      <NavLink className="nav-link" to="/register">Register</NavLink>
    </li>
  
        </>
      )
    }
  }
  

    return (
        <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top"> 
    
  <div className="container">
    <NavLink className="navbar-brand" to="#"><figure> <img src={logo} alt="logo" /> <figcaption className="clunky-fix">ClunkyFix</figcaption></figure>
     </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
      <RenderNav/>
        
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}


export default Navbar