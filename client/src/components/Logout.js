import React, {useEffect,useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {UserContext} from '../App'

const Logout=()=>{
    const {state,dispatch}=useContext(UserContext);
    const navigate=useNavigate();

    const logoutUser = async () => {
    
        const res=await fetch("/logout",{
            method:"GET",
            headers:{
              Accept:"application/json",
              "Content-type":"application/json"
            },
            credentials:"include"
            
          });
        
        const data=await res.json();
        console.log(data);
        if(data.status){
          dispatch({type:'LOGIN', payload:false});
          window.alert("Logout Successful");
          navigate('/signin');
          
        }
        else{
            window.alert("Invalid Details");
        }
      }

      useEffect(()=>{
        logoutUser();
    },[]);
    
     return (
        <>
        <h1>Logout Page</h1>
      </>
    )
}


export default Logout