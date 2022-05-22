import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import logo from '../images/test.png';
import Admin from './Admin'


const Home=()=>{

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/admin/viewuser`; 
    navigate(path);
  }

  const routeChange2 = () =>{ 
    let path = `/admin/viewworkshop`;
    navigate(path);
  }

  const routeChange3 = () =>{ 
    let path = `/makeAppointment`; 
    navigate(path);
  }

    const [userData, setUserData]=useState([]);


    const getHomePage = async () => {
    
        const res=await fetch("/home",{
          method:"GET",
          headers:{
            Accept:"application/json",
            "Content-type":"application/json"
          },
          credentials:"include"
          
        });

        const data=await res.json()
        console.log(data);
        if(!res.status===200|| !data){
            console.log("Error");
          }
          else{
            setUserData(data);
            //navigate('/');
          }

          }

    

    useEffect(()=>{
        getHomePage();
    },[]);

    
    return (
      <div>
          {
              userData.role==="admin"?
              <div>
                <Admin/>
                 {/* <button type="button" name="getusers" id="getusers" className="btn btn-primary"  onClick={routeChange}>View all users</button>
            <button type="button" name="getworkshops" id="getworkshops" className="btn btn-primary"  onClick={routeChange2}>View all workshops</button> */}
                </div>
              :
              <div>

                {/* <div className="containerv huh">
                  <div className="row"> 
                    <div className="col-sm-6">
                      <h1> AUTO DOCTOR </h1>
                      <h2>Your all in one automobile solution</h2>
                      <button type="button" name="makeappointment" id="makeappointment" className="makeappointment"  onClick={routeChange3}>Make Appointment</button>

                  </div>

                  <div className="col-sm-6">
                  <img className=".bg-transparent" src={logo} alt="logo" />
                  </div>
                  
                  </div>
                </div> */}

  <div className="container py-5 h-100 w-100">
    <div className="row d-flex justify-content-center align-items-center h-100 w-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Auto Doctor</h2>
              <p className="text-white-50 mb-5">Your all in one automobile solution</p>

              

              <button type="submit" name="signin" id="signin" className="btn btn-primary" onClick={routeChange3}>Make appointment</button>

            

            </div>


          </div>
        </div>
      </div>
    </div>
  </div>

                </div>
          }

      </div>
      
 
    )
}


export default Home