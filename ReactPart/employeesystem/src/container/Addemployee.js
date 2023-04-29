import React, { useState } from 'react'
import './Addemployee.css'
import { Link, json } from 'react-router-dom'

export default function Addemployee() {
    const[name,setName] = useState('')
    const[address,setAddress] = useState('')
    const[phone,setPhone] = useState('')
    const[gender,setGender] = useState('')
    const[skill,setSkill] = useState('')

    const handelClick=(e)=>{
            const employee = {name,address,phone,gender,skill};
            console.log(employee);

            //now the important part is to send the data in database when submit button is clicked
            fetch("http://localhost:8181/employee/add", {
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(employee)
                }
            ).then(()=>{   //this is only to print message in console
                console.log("Employee added successfully");
            })

    }


  return (
    <div>
    

       <h1>Employee Management System - Add employee</h1>

        <div class="container">
        
                <div>
                    <label>Employee Name : </label>
                    <input type="text"  value={name} 
                    onChange={(e)=> setName(e.target.value)}
                    required />
                </div>

                <div >
                    <label>Employee Address : </label>
                    <input type="text"  id="author" value={address} 
                    onChange={(e)=> setAddress(e.target.value)}
                    required />
                </div>
                <div>
                    <label  class="form-label">Phone Number: </label>
                    <input type="text"    value={phone} 
                    onChange={(e)=> setPhone(e.target.value)}
                    required />
                </div>

                <div >
                    <label >Male: </label>
                    <input type="radio"  name={gender}  value={gender}  onClick={(e)=> setGender('male')} />

                    <label >Female: </label>
                    <input type="radio"   name={gender} value={gender} onClick={(e)=> setGender('female')}  />
                </div>

                <div >
                    <label  >Employee Skills: </label>
                    <select >
                        <option value="" disabled>---Select---</option>
                        <option value={skill} onChange={(e)=> setSkill('java')}>Java</option>
                        <option value={skill} onChange={(e)=> setSkill('python')}>Python</option>
                        <option value={skill} onChange={(e)=> setSkill('JavaScript')}>JavaScript</option>
                        <option value={skill} onChange={(e)=> setSkill('Node js')}>Node js</option>

                    </select>
                </div>

                <Link to='/'>
                    <button onClick={handelClick}>Submit</button>
                </Link>

                <Link to='/'>
                    <button>Back</button>
                </Link>
                
                
        </div> 
    </div>
    
  )
}
