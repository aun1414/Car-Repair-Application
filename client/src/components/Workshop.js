import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Workshop=()=>{
    const [name,setName]=useState('')
    const [city,setCity]=useState('')
    const [address, setAddress]= useState('')

    const navigate=useNavigate();

    const registerWorkshop = async (e) => {
        e.preventDefault();
    
        const res=await fetch("/workshop",{
          method:"POST",
          headers:{
            Accept:"application/json",
            "Content-type":"application/json"
          },
          body: JSON.stringify({
    
            name,city,address
          }),
          credentials:"include"
          
          
        });
        
        const data=await res.json();
        if(data.status===422 || !data){
        window.alert("Invalid Registration");
        console.log("Invalid registration");
        }
        else{
        window.alert("Registration Successfful");
        console.log("Registration Successful");
        navigate('/home');
        }
       
        
      }
    return (
        <>
        {/* <form method="POST">
      
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" autoComplete="off" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
      </div>

      <div className="mb-3">
        <label htmlFor="city" className="form-label">city</label>
        <input type="text" className="form-control" id="city" autoComplete="off" name="city" value={city} onChange={(e)=>setCity(e.target.value)} placeholder="City"/>
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input type="text" className="form-control" id="address" autoComplete="off" name="address" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Address"/>
      </div>

      <button type="submit" name="registerWorkshop" id="registerWorkshop" className="btn btn-primary" onClick={registerWorkshop}>Register</button>
      </form> */}

<section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Register Workshop</h2>
              <p className="text-white-50 mb-5">Please register your workshop here!</p>

              <div className="form-outline form-white mb-4">
              <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" autoComplete="off" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
              </div>

              <div className="form-outline form-white mb-4">
              <label htmlFor="city" className="form-label">City</label>
        <input type="text" className="form-control" id="city" autoComplete="off" name="city" value={city} onChange={(e)=>setCity(e.target.value)} placeholder="City"/>
              </div>

              <div className="form-outline form-white mb-4">
              <label htmlFor="address" className="form-label">Address</label>
        <input type="text" className="form-control" id="address" autoComplete="off" name="address" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Address"/>
              </div>


              <button type="submit" name="registerWorkshop" id="registerWorkshop" className="btn btn-primary" onClick={registerWorkshop}>Register</button>

            

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


export default Workshop