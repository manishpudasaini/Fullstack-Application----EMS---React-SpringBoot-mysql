import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';
import "./Home.css"

export default function Home() {
    const[employee, setEmployee] = useState([])

    


    useEffect(()=>{
        fetch('http://localhost:8181/employee/get').then(function(response){
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
                        </tr>)
                    

                 })}
    
    </tbody>

    </table>

    
    </div>
    
  )
}
