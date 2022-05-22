import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const UserDetails=()=>{

    const {id}=useParams("");
    console.log(id);
    
    const [userData, setUserData]=useState([]);

    const getUserData = async () => {
        const res=await fetch(`/users/${id}`,{
          method:"GET",
          headers:{
            "Content-type":"application/json"
          },
          
        });

        const data=await res.json()
        if(data.status===422|| !data){
            console.log("Error");
          }
          else{
            setUserData(data);
          }

    }

    useEffect(()=>{
        getUserData();
    },[]);
    
    return (
        <div>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  
  <tbody>

      
    
            <tr>
            <th scope="row">{id}</th>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
            </tr>       
                  
 
  </tbody>
</table>
        </div>
        
    )
}


export default UserDetails