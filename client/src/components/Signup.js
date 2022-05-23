import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {useNavigate} from 'react-router-dom';

const Signup=()=>{
  
  const [user,setUser]=useState({
    name:"",email:"",password:"",city:""
  });
  
  const navigate=useNavigate();
  
  let name,value;
  const handleInputs=(e) =>{
      console.log(e)
      name=e.target.name;
      value=e.target.value;

      setUser({...user, [name]:value});

  }

  function hasNumber(myString) {
    return /\d/.test(myString);
  }

  const PostData = async (e) => {
    e.preventDefault();
    var letters = /^[A-Za-z]+$/;
    const {name,email,password,city}=user;

    const hasDigits=hasNumber(name);
    if(hasDigits){
    window.alert("Invalid name");
    navigate('/register');
    return
    }

    const hasDigits2=hasNumber(city);
    if(hasDigits2){
    window.alert("Invalid city");
    navigate('/register');
    return
    }


    
    if(password.length<5){
    window.alert("Password too short");
    navigate('/register');
    return
    }

    if(password.length>15){
      window.alert("Password too long");
      navigate('/register');
      return
      }

    const res=await fetch("/register",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify({

        name,email,password,city
      })
      
    });
    
    const data=await res.json();
    if(data.status===422 || !data){
      window.alert("Invalid Registration");
    }
    else{
      window.alert("Registration Successful");
      navigate('/signin');
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

              <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
              <p className="text-white-50 mb-5">Please signup here!</p>

              <div className="form-outline form-white mb-4">
              <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name"  autoComplete="off" name="name" value={user.name} onChange={handleInputs} placeholder="Name"/>
              </div>

              <div className="form-outline form-white mb-4">
              <label htmlFor="email" className="form-label">Email</label>
        <input type="text" className="form-control" id="email" autoComplete="off" name="email" value={user.email} onChange={handleInputs} placeholder="Email"/>
              </div>

              <div className="form-outline form-white mb-4">
              <label htmlFor="city" className="form-label">City</label>
        <input type="text" className="form-control" id="city" autoComplete="off" name="city" value={user.city} onChange={handleInputs} placeholder="City"/>
              </div>

              <div className="form-outline form-white mb-4">
              <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" autoComplete="off" name="password" value={user.password} onChange={handleInputs} placeholder="Password"/>
              </div>

              <button type="submit" name="signup" id="signup" className="btn btn-primary" onClick={PostData}>Register</button>

            

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


export default Signup