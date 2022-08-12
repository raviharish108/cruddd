import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Getstudentdata() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [std, setstd] = useState({});
  useEffect(() => {
    fetch(`https://627f71c3b1cc1b126255a8a2.mockapi.io/studentdetails/${id}`)
      .then((response) => response.json())
      .then((data) => setstd(data));
  }, []);
  return (
    <div className='container-fluid'>
      <ol>
        <li>name:{std.name}</li>
        <li>email:{std.email}</li>
        <li>id:{std.id}</li>
        <li> <button onClick={(() => navigate(-1))}>back</button></li>
      </ol>

    </div>
  );
}
