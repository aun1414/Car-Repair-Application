import React from 'react';
import { useNavigate } from "react-router-dom";

  




const Admin=()=>{
    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/admin/viewuser`; 
    navigate(path);
  }

  const routeChange2 = () =>{ 
    let path = `/admin/viewworkshop`; 
    navigate(path);
  }
    return (
        <div>
          <div className="container py-5 h-100 w-100">
    <div className="row d-flex justify-content-center align-items-center h-100 w-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Welcome Admin</h2>

              <button type="button" name="getusers" id="getusers" className="btn btn-primary me-2 my-2"  onClick={routeChange}>View all users</button>
            <button type="button" name="getworkshops" id="getworkshops" className="btn btn-primary"  onClick={routeChange2}>View all workshops</button>
    
            

            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
            
        </div>
    )
}


export default Admin