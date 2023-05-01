import React from 'react'
import './Update.css'
import { useNavigate } from 'react-router-dom'

function Update({uid,uname,uaddress,uphone,ugender,uskill}) {
    const navigate = useNavigate();
    
    function handelClickUpdate(){
            navigate('/update',{state:{id:uid, name:uname, address:uaddress, phone:uphone, gender:ugender, skill:uskill}});
    }
   
  return (
    <div>
        <button id='update' onClick={handelClickUpdate}>Update</button>
        
    </div>
  )
}

export default Update