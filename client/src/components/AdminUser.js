import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';

const Admin=()=>{

    const [userData, setUserData]=useState([]);


    const getUserData = async () => {
    
        const res=await fetch("/users",{
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
            //navigate('/');
          }

    }

    useEffect(()=>{
        getUserData();
    },[]);

    const deleteUser = async (id) => {

        const res2 = await fetch(`/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            getUserData();
        }
    }
    return (
        <div>
            <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  
  <tbody>

      {
          userData.map((element,i)=>{
              return(
                  <>
                 <tr key={i}>
            <th scope="row" >{i + 1}</th>
            <td>{element.name}</td>
            <td >{element.email}</td>
            <td><NavLink to={`/admin/viewuser/${element._id}`}> <button type="button" className="btn btn-info">View Details</button></NavLink></td>
            <td><button type="button" className="btn btn-danger" onClick={()=>deleteUser(element._id)}>Delete</button></td>
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


export default Admin