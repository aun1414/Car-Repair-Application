import React,{useState,useEffect} from 'react';
import { NavLink,useParams } from 'react-router-dom';

const ViewAppointments=()=>{

    const [appointmentData, setAppointmentData]=useState([]);
    const { id } = useParams("");


    const getAppointments = async () => {
    
        const res=await fetch(`/viewappointment/${id}`,{
          method:"GET",
          headers:{
            "Content-type":"application/json"
          },
          credentials:"include"
        });

        const data=await res.json()
        if(data.status===422|| !data){
            console.log("Error");
          }
          else{
            setAppointmentData(data);
            //navigate('/');
          }

    }

    useEffect(()=>{
        getAppointments();
    },[]);

    // const deleteWorkshop = async (id) => {

    //     const res2 = await fetch(`/deleteworkshop/${id}`, {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     });

    //     const deletedata = await res2.json();

    //     if (res2.status === 422 || !deletedata) {
    //         console.log("error");
    //     } else {
    //         console.log("workshop deleted");
    //         getWorkshopData();
    //     }
    // }

    return (
        <div className="mt-10">
            <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Time</th>
    </tr>
  </thead>
  
  <tbody>

      {
          appointmentData.map((element,i)=>{
              return(
                  <>
                 <tr key={i}>
            <th scope="row" >{i + 1}</th>
            <td>{element.user.name}</td>
            <td >{element.user.email}</td>
            <td >{element.time}</td>
            {/* <td><button type="button" className="btn btn-danger" onClick={()=>deleteWorkshop(element._id)}>Delete</button></td> */}
            </tr>       
                  </>
              )
          })
      }
 
  </tbody>
</table>

        </div>
        
    )
}


export default ViewAppointments