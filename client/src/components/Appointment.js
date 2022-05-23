import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {useNavigate} from 'react-router-dom';

const Appointment=()=>{
  
  const [appointment,setAppointment]=useState({
    workshopName:"",time:""
  });
  
  const navigate=useNavigate();
  
  let name,value;
  const handleInputs=(e) =>{
      console.log(e)
      name=e.target.name;
      value=e.target.value;

      setAppointment({...appointment, [name]:value});

  }

  const PostData = async (e) => {
    e.preventDefault();
    const {workshopName,time}=appointment;

    const res=await fetch("/makeAppointment",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify({

        workshopName,time
      }),
      credentials:"include"
    });
    
    const data=await res.json();
    if(data.status===422 || !data){
      window.alert("Invalid Appointment");
      console.log("Invalid Appointment");
    }
    else{
      window.alert("Appointment Successfful");
      console.log("Appointment Successful");
      navigate('/home');
    }
  }
    return (
        <>
        {/* <form method="POST">
        <div className="mb-3">
        <label htmlFor="workshopName" className="form-label">Workshop Name</label>
        <input type="text" className="form-control" id="workshopName"  autoComplete="off" name="workshopName" value={appointment.workshopName} onChange={handleInputs} placeholder="Workshop Name"/>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="text" className="form-control" id="time" autoComplete="off" name="time" value={appointment.time} onChange={handleInputs} placeholder="Time"/>
      </div>

      <button type="submit" name="appoint" id="appoint" className="btn btn-primary" onClick={PostData}>Make Appointment</button>
      </form> */}

<section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Appointment</h2>
              <p className="text-white-50 mb-5">Please shedule your appointment here!</p>

              <div className="form-outline form-white mb-4">
              <label htmlFor="workshopName" className="form-label">Workshop Name</label>
        <input type="text" className="form-control" id="workshopName"  autoComplete="off" name="workshopName" value={appointment.workshopName} onChange={handleInputs} placeholder="Workshop Name"/>
              </div>

              <div className="form-outline form-white mb-4">
              <label htmlFor="time" className="form-label">Time</label>
        <input type="time" className="form-control" id="time" autoComplete="off" name="time" value={appointment.time} onChange={handleInputs} placeholder="Time"/>
              </div>
              
              <button type="submit" name="appoint" id="appoint" className="btn btn-primary" onClick={PostData}>Make Appointment</button>
    

            

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


export default Appointment