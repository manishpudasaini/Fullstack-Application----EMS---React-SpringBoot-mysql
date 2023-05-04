import React, {   useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';
import DeleteButton from './DeleteButton';
import Update from './Update';
import "./Home.css"


export default function Home() {

  

 

    const[employee, setEmployee] = useState([])

  
    useEffect(()=>{
        fetch('http://localhost:8080/employee/get').then(function(response){
        response.json().then(function(data) {

        console.log(data);

        if(data.length > 0){
                                 setEmployee(data);
                           }

    });
        }).catch(function(error) {
        console.log('Fetch Error:', error);
        })
    },[])

    
  return (
    <div className="homepage">

      {/* header component   */}
    <Header title="Employee List"/>
    

    <Link to='/addemp'>
        <button id='add'>Add employee</button>
    </Link>
    

    <table className="table">
        <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Employee Address</th>
            <th scope="col">Employee Phone</th>
            <th scope="col">Gender</th>
            <th scope="col">Skill</th>
            <th scope="col">Action</th>
        </tr>
        </thead>

        <tbody>
            
                {employee.map((currentUser) =>{
            
                    const {id,name,address,phone,gender,skill} = currentUser;

                    return (<tr>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{address}</td>
                            <td>{phone}</td>
                            <td>{gender}</td>
                            <td>{skill}</td>
                            <td><DeleteButton id={id}/> 

                                 <Update  uid={id} uname={name} uaddress={address}
                                          uphone={phone} ugender={gender} uskill={skill} />

                            </td>
                        </tr>)
                    

                 })}
    
    </tbody>

    </table>

    
    </div>
    
  )
}


