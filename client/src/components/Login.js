import React, {useState,useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {UserContext} from '../App'

const Login=()=>{

    const {state,dispatch}=useContext(UserContext);
    const [password, setPassword]=useState('')
    const [email, setEmail]=useState('')

    const navigate=useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();
    
        const res=await fetch("/signin",{
          method:"POST",
          headers:{
            "Content-type":"application/json"
          },
          body: JSON.stringify({
    
            email,password
          })
          
        });
        
        const data=await res.json();
        if(data.status|| !data){
          window.alert("Invalid Details")
        }
        else{
          dispatch({type:'LOGIN', payload:true});
          window.alert("Login Successful");
          navigate('/home');
        }
      }
    
     return (
        <>

<section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <div className="form-outline form-white mb-4">
              <label htmlFor="email" className="form-label">Email</label>
        <input type="text" className="form-control" id="email" autoComplete="off" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
              </div>

              <div className="form-outline form-white mb-4">
              <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" autoComplete="off" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
              </div>

              <button type="submit" name="signin" id="signin" className="btn btn-primary" onClick={loginUser}>Login</button>

            

            </div>

            <div>
              <p className="mb-0">Don't have an account? <a href="/register" className="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </>
    )
}


export default Login