import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';

const YourWorkshop=()=>{

    const [workshopData, setWorkshopData]=useState([]);


    const getWorkshopData = async () => {
    
        const res=await fetch("/yourworkshop",{
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
            setWorkshopData(data);
            //navigate('/');
          }

    }

    useEffect(()=>{
        getWorkshopData();
    },[]);

    const deleteWorkshop = async (id) => {

        const res2 = await fetch(`/deleteworkshop/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("workshop deleted");
            getWorkshopData();
        }
    }

    return (
        <div className="mt-10">
            <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">City</th>
      <th scope="col">Address</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  
  <tbody>

      {
          workshopData.map((element,i)=>{
              return(
                  <>
                 <tr key={i}>
            <th scope="row" >{i + 1}</th>
            <td>{element.name}</td>
            <td >{element.city}</td>
            <td >{element.address}</td>
            <td><NavLink to={`/yourworkshop/${element._id}`}> <button type="button" className="btn btn-info">Edit workshop</button></NavLink></td>
            <td><NavLink to={`/yourworkshop/view/${element._id}`}><button type="button" class="btn btn-success">View Appointments</button></NavLink></td>
            <td><button type="button" className="btn btn-danger" onClick={()=>deleteWorkshop(element._id)}>Delete</button></td>
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


export default YourWorkshop