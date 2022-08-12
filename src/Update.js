import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
export function Update() {
const[name,setname]=useState("");
const[email,setemail]=useState("");
const newone={name:name,email:email}
const navigate=useNavigate();
const navi=(()=>navigate("/all"));
const update=async()=>{
     await fetch("https://627f71c3b1cc1b126255a8a2.mockapi.io/studentdetails",
     {method:"POST",
     body: JSON.stringify(newone),
     headers: {"Content-Type": "application/json"}});
    navi();
  };
  return (
    <div className='container-fluid'>
      <TextField  className="up" id="outlined-basic" label="enter student name" variant="outlined" onChange={((event)=>{setname(event.target.value)})} />
      <br/>
      <TextField  className="up" id="outlined-basic" label="enter student email id" variant="outlined" onChange={((event)=>setemail(event.target.value))}/>
         {/* <label for="name"> enter your name</label>
        <input type="text" id="name" onChange={((event)=>{setname(event.target.value)})}/>
        <label for="email">enter your email</label>
        <input type="text" id="email" onChange={((event)=>setemail(event.target.value))}/>  */}
        <br/>
        <button   className="up" onClick={(()=>update())}>submit</button>
        
    </div>
  );
}
