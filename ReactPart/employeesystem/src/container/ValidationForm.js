import React, { useState } from 'react'

import "./ValidationForm.css"
import { Link } from 'react-router-dom'

export default function ValidationForm() {

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
  <>
   
   <div>

   <form>
  <h2>Registration Form</h2>
  
  <div class="form-group">
    <label for="name">Employee Name : </label>
    <input type="text" id="name" name="name"  placeholder='name'
            value={name} onChange={(e)=> setName(e.target.value)} required />
  </div>

    
  <div class="form-group">
    <label for="name">Employee Address : </label>
    <input type="text" id="address" name="address" placeholder='address'
            value={address}  onChange={(e)=> setAddress(e.target.value)} required  />
  </div>

    
  <div class="form-group">
    <label for="name">Employee Phone No.: </label>
    <input type="text" id="phone" name="phone" placeholder='phone'
            value={phone} onChange={(e)=> setPhone(e.target.value)}required  />
  </div>
  
  <div class="form-group">
    <label>Gender:</label>
    <div>
      <input type="radio" id="male" name={gender}  value={gender}  onClick={(e)=> setGender('male')} />
      <label for="male">Male</label>
    </div>
    <div>
      <input type="radio" id="female" name={gender} value={gender} onClick={(e)=> setGender('female')} />
      <label for="female">Female</label>
    </div>
  </div>


  
  <div class="form-group">
    <label for="skill">Skill:</label>
    <select id="Skill" value={skill} onChange={(e)=> setSkill(e.target.value)}>
      <option value=""disabled>---Select---</option>
      <option>Java</option>
      <option>Python</option>
      <option>JavaScript</option>
      <option>Node Js</option>
    </select>
  </div>
  
  <div class="form-group">
        <Link to='/'>
                    <button type='submit' onClick={handelClick}>Submit</button>
        </Link>

                <Link to='/'>
                    <button type='back'>Back</button>
                </Link>
  </div>
</form>


    </div>
  
  </>
  
  )
}
