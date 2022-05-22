import React,{useState,useEffect} from 'react';
import {useParams, useNavigate } from 'react-router-dom';

const EditWorkshop=()=>{
    const navigate=useNavigate();
    const { id } = useParams("");
    const [workshop,setWorkshop]=useState({
        name:"",city:"",address:""
      });
  
      let name,value;
      const handleInputs=(e) =>{
          console.log(e)
          name=e.target.name;
          value=e.target.value;
    
          setWorkshop({...workshop, [name]:value});
    
      }


    const updateWorkshop = async(e)=>{
        e.preventDefault();

        const {name,city,address} = workshop;

        const res2 = await fetch(`/updateworkshop/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name,city,address
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            navigate('/yourworkshop');
        }

    }
    return (
        <>
        {/* <form method="POST">
        <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name"  autoComplete="off" name="name" value={workshop.name} onChange={handleInputs} placeholder="Name"/>
      </div>
      <div className="mb-3">
        <label htmlFor="city" className="form-label">City</label>
        <input type="text" className="form-control" id="city" autoComplete="off" name="city" value={workshop.city} onChange={handleInputs} placeholder="City"/>
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input type="text" className="form-control" id="address" autoComplete="off" name="address" value={workshop.address} onChange={handleInputs} placeholder="Address"/>
      </div>

      <button type="submit" name="update" id="update" className="btn btn-primary" onClick={updateWorkshop}>Update</button>
      </form> */}

<section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Edit Workshop</h2>

              <div className="form-outline form-white mb-4">
              <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" autoComplete="off" name="name" value={workshop.name} onChange={handleInputs} placeholder="Name"/>
              </div>

              <div className="form-outline form-white mb-4">
              <label htmlFor="city" className="form-label">city</label>
        <input type="text" className="form-control" id="city" autoComplete="off" name="city" value={workshop.city} onChange={handleInputs} placeholder="City"/>
              </div>

              <div className="form-outline form-white mb-4">
              <label htmlFor="address" className="form-label">Address</label>
        <input type="text" className="form-control" id="address" autoComplete="off" name="address" value={workshop.address} onChange={handleInputs} placeholder="Address"/>
              </div>


              <button type="submit" name="update" id="update" className="btn btn-primary" onClick={updateWorkshop}>Update</button>

            

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


export default EditWorkshop