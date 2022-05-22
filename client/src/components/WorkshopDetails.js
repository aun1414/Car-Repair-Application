import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const UserDetails=()=>{

    const {id}=useParams("");
    
    const [workshopData, setWorkshopData]=useState([]);

    const getWorkshopData = async () => {
        const res=await fetch(`/workshops/${id}`,{
          method:"GET",
          headers:{
            "Content-type":"application/json"
          },
          
        });

        const data=await res.json()
        console.log(data);
        if(data.status===422|| !data){
            console.log("Error");
          }
          else{
            setWorkshopData(data);
          }

    }

    useEffect(()=>{
        getWorkshopData();
    },[]);
    
    return (
        <div>
            <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">City</th>
      <th scope="col">Address</th>
      <th scope="col">UserID</th>
    </tr>
  </thead>
  
  <tbody>

      
    
            <tr>
            <th scope="row">{id}</th>
            <td>{workshopData.name}</td>
            <td>{workshopData.city}</td>
            <td>{workshopData.address}</td>
            <td>{workshopData.user}</td>
            
            </tr>       
                  
 
  </tbody>
</table>
        </div>
        
    )
}


export default UserDetails