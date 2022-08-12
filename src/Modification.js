//  const updateStudent = async (id, newPayload) => {
//   const updateResponse = await fetch(
//     `${BASE_URL}/students/${id}`,
//     {
//       method: "PUT",response
//     }
//   )}
//   const updateStudentData = await updateResponse.json();
//   console.log(updateStudentData);
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
export function Modification() {
  const[name,setname]=useState("");
  const[email,setemail]=useState("");
  const[id,setid]=useState("");
  const modifyone={name:name,email:email}
  const navigate=useNavigate();
const navi=(()=>navigate("/all"));
const updateStudent = async (Id,newpayload) => {
   await fetch(`https://627f71c3b1cc1b126255a8a2.mockapi.io/studentdetails/${Id}`,{ method: "PUT",body: JSON.stringify(newpayload),
   headers: {"Content-Type": "application/json"} });
  navi();}
  return (
    <div>
        <TextField  className="up" id="outlined-basic" label="enter student id" variant="outlined" onChange={((event)=>{setid(event.target.value)})} />

     <TextField  className="up" id="outlined-basic" label="enter student name" variant="outlined" onChange={((event)=>{setname(event.target.value)})} />
      <br/>
      
      <TextField  className="up" id="outlined-basic" label="enter student email id" variant="outlined" onChange={((event)=>setemail(event.target.value))}/>
      <br/>
        <button   className="up" onClick={(()=>updateStudent(id,modifyone))}>submit</button>
    </div>
  );

}
