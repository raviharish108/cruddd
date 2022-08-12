import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { App1 } from './App1';
import { Getstudentdata } from './Getstudentdata';
import { Update } from './Update';
import { Modification } from './Modification';
function App(){
  const navigate=useNavigate();
  const[id,setid]=useState();
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return(
      <div className='container-fluid'>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit" onClick={(()=>navigate("/all"))}>All STUDENTS</Button>
          <Button color="inherit" onClick={(()=>navigate("/home"))}>HOME</Button>
          <Button color="inherit" onClick={(()=>navigate("/update"))}>Update data</Button>
          <Button color="inherit" onClick={(()=>navigate("/modify"))}>Modification</Button>
          <input type="text" placeholder="enter the student id" onChange={((event)=>setid(event.target.value))}/>
          <button onClick={(()=>navigate(`/studentDetails/${id}`))}>search</button>
          </Typography>
          <button>Current date is {date}</button>
        </Toolbar>
      </AppBar>
    </Box>
         <Routes>
          <Route path="/all" element={<App1/>} />
          <Route path="/studentdetails/:id" element={<Getstudentdata />} />
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/update" element={<Update/>}></Route>
          <Route path="/modify" element={<Modification/>}></Route>
        </Routes>
       
      </div>
    )
  }
   
   function Home(){
    let photos=[{class:1,img:"https://www.makersempire.com/wp-content/uploads/2016/12/MakersEmpire3DPrinting-25.jpg"},
    {class:2,img:"https://acseht.org/wp-content/uploads/2019/12/IMG_0728-1024x768.jpeg"},
   {class:3,img:"https://c8.alamy.com/comp/2ET2X9M/teacher-elish-hanratty-during-her-class-with-1st-to-3rd-class-pupils-at-scoil-naomh-lorcan-in-omeath-as-junior-infants-to-3rd-class-pupils-return-to-school-more-than-300000-students-have-returned-to-classrooms-across-the-country-for-the-first-time-since-december-after-pandemic-restrictions-were-lifted-2ET2X9M.jpg"},
  {class:4,img:"https://huayisec.moe.edu.sg/qql/slot/u175/Huayian%20Programme/Level%20Learning%20Prog/Sec%204_5/2019/1.jpg"},
  {class:5,img:"https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2022/01/04/yq-ccs1-04012022.jpg?VersionId=WHN80.kcw_JNkVL.UqyB06jG_ZvzorFx&itok=y8u_ZZmp"},
  {class:6,img:"https://www.spectra.edu.sg/wp-content/uploads/2020/10/2.jpeg"},
  {class:7,img:""}];
    return(
      <div>
          <div className='main'>
        <h1>st.joseph`s higher secondary school</h1>
        <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"/>
       <h1>Address</h1>
       <h3>
        xxx xxxx yyyy zzzz,
        xxx yyyy zzz,
        xxxx yyyyyy,zzzzz,
        73918yr874.
        kkdaffuhfhew
        abffhfuifih weu wantbfwahfhwefe
        bhweuifihewuffhewuf
        ewjhfuewfuewfhuwhf
      </h3>
      <h1>school photos</h1>
     {photos.map((value)=><Photo img={value.img} classes={value.class}/>)}
      </div>
      </div>
    )
   }
   function Photo({img,classes}){
    return(
      <div>
        <img src={img} alt={classes} />
        <h1>{classes} STD</h1>
      </div>
    )
   } 
   export default App;