import React,{ useState} from 'react'
import './UpdateEmployeeForm'
import Header from './Header'
import {Link, useLocation} from 'react-router-dom';



export default function UpdateEmployeeForm() {
    const location = useLocation();

    
    const[name,setName] = useState(location.state.name)
    const[address,setAddress] = useState(location.state.address)
    const[phone,setPhone] = useState(location.state.phone)
    const[gender,setGender] = useState(location.state.gender)
    const[skill,setSkill] = useState(location.state.skill)




    const handelClick=(e)=>{
      

      const id = location.state.id;

      console.log(id);
        
        const employee = {name,address,phone,gender,skill};

        console.log(employee);
        

        //now the important part is to send the data in database when submit button is clicked
        fetch(`http://localhost:8080/employee/update/${id}`, {
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(employee)
            }
        ).then(()=>{   //this is only to print message in console
            alert("Employee updated successfully");
            console.log("Employee updated successfully");
        })

        // const requestOptions = {
        //     method: 'PUT',
        //     headers: { 'Content-Type': 'application/json'},
        //     body: JSON.stringify(employee)
        // };
        // fetch(`http://localhost:8080/employee/update/${location.state.id}`, requestOptions)
        // .then(()=>{   //this is only to print message in console
        //     alert("Employee updated successfully");
        //     console.log("Employee updated successfully");
        // })

}


function refreshPage(){
  setTimeout(()=>{
      window.location.reload();
  },1000);
}

    

  return (
    <>
    <Header title="Update employee"/>
   
   <div>
    

   <form>
  <h2>Update Employee Form</h2>
  
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
    <label for="skill">Role:</label>
    <select id="Skill" value={skill} onChange={(e)=> setSkill(e.target.value)}>
      <option value=""disabled>---Select---</option>
      <option>Java Developer</option>
      <option>Python Developer</option>
      <option>CEO</option>
      <option>Frontend Developer</option>
      <option>Bussiness Analyst</option>
    </select>
  </div>
  
  <div class="form-group">
        <Link to='/' onClick={refreshPage}>
            <button type='submit' onClick={handelClick}>Update</button>
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

 