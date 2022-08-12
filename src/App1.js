import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export function App1() {
  const [students, setstudents] = useState([]);
  let Data=(()=>{ fetch("https://627f71c3b1cc1b126255a8a2.mockapi.io/studentdetails")
                  .then((response) => response.json())
                  .then((data) => setstudents(data));})
  useEffect(()=>{
   Data();
  },[]);
  let a=students.length;
  let dele=(id)=>{
        fetch(`https://627f71c3b1cc1b126255a8a2.mockapi.io/studentdetails/${id}`,{method:"DELETE"})
       .then(()=>Data()); 
   }
  return (
    <div className='container-fluid'>
      <h6>total Number of Students:{a}</h6>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">about</th>
      <th scope="col">delete</th>
    </tr>
  </thead>
  <tbody>
  {students.map((st) => <Manavan name={st.name} 
  id={st.id} 
  email={st.email} 
  std={st}  
   deletebutton={<button onClick={(()=>{dele(st.id)})}>delete</button>}   
  />)}
  </tbody>
</table>
    </div>
  );
}
function Manavan({ name, id,email,deletebutton}) {
  const navigate = useNavigate();
  return (
      <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td><button onClick={(()=>navigate(`/studentDetails/${id}`))}>about</button></td>
      <td>{deletebutton}</td>
    
    </tr>
  );
}