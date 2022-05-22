import React,{useState,useEffect} from 'react';

const NearbyWorkshop=()=>{

    const [workshopData, setWorkshopData]=useState([]);


    const getWorkshopData = async () => {
    
        const res=await fetch("/nearbyWorkshop",{
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

    return (
        <div>
            <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">City</th>
      <th scope="col">Address</th>

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


export default NearbyWorkshop