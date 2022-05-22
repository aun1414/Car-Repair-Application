
import './App.css';
import React,{createContext, useReducer} from 'react';
import Navbar from './components/Navbar';
import {Route} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Workshop from './components/Workshop';
import Admin from './components/Admin';
import AdminUser from './components/AdminUser'
import {Routes,Navigate} from "react-router-dom";
import UserDetails from './components/UserDetails';
import AdminWorkshop from './components/AdminWorkshop'
import WorkshopDetails from './components/WorkshopDetails'
import Appointment from './components/Appointment';
import NearbyWorkshop from './components/NearbyWorkshops';
import YourWorkshop from './components/YourWorkshops';
import EditWorkshop from './components/EditWorkshop';
import EditAccount from './components/EditAccount';
import Logout from './components/Logout';
import bg from './images/bw.jpg'
import {initialState,reducer} from "../src/reducer/useReducer";
import ViewAppointments from './components/ViewAppointment';

export const UserContext=createContext();

const Routing=()=>{
  return(
    <Routes>
  <Route path="/" element={<Navigate replace to="/signin" />} />
  
  <Route path="/signin" element={<Login/>}/>
  <Route path="/home" element={<Home/>}/>
  
  <Route path="/register" element={<Signup/>}/>
  <Route path="/workshop" element={<Workshop/>}/>
  <Route path="/admin" element={<Admin/>}/>
  <Route path="/admin/viewuser" element={<AdminUser/>}/>
  <Route path="/admin/viewuser/:id" element={<UserDetails/>}/>
  <Route path="/admin/viewworkshop" element={<AdminWorkshop/>}/>
  <Route path="/admin/viewworkshop/:id" element={<WorkshopDetails/>}/>
  <Route path="/makeAppointment" element={<Appointment/>}/>
  <Route path="/nearbyWorkshops" element={<NearbyWorkshop/>}/>
  <Route path="/yourworkshop" element={<YourWorkshop/>}/>
  <Route path="/yourworkshop/:id" element={<EditWorkshop/>}/>
  <Route path="/yourworkshop/view/:id" element={<ViewAppointments/>}/>
  <Route path="/editaccount" element={<EditAccount/>}/>
  <Route path="/logout" element={<Logout/>}/>

   </Routes>
  )
}

const App=()=> {
  const [state,dispatch]=useReducer(reducer,initialState);
  return (
    
   <>
   <UserContext.Provider value={{state,dispatch}}>
   <Navbar/>
   <Routing/>
   
  
   </UserContext.Provider>
   </>
  );
}

export default App;
