import React from 'react'
import './DeleteButton.css'

function DeleteButton({id}) {

    function handelClick(){
        fetch(`http://localhost:8080/employee/delete/${id}`,{method:"GET"})
                .then(()=>{   //this is only to print message in console
                    console.log("Employee deleted successfully");
                })

         window.location.reload();       
    }



  return (
    <div>
         <button id='delete' onClick={handelClick}>Delete</button>
    </div>
  )
}

export default DeleteButton