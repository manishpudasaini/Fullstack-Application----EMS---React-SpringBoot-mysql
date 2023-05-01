import Home from "./container/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Addemployee from "./container/Addemployee";
import UpdateEmployeeForm from "./container/UpdateEmployeeForm";

function App() {
  return (
    <div>
      
      <Router>

        <Routes>
        <Route path='/' element={
                                  <Home />
                              } />    
          
          
          <Route path='/addemp' element={
                                  <Addemployee />
                              } />   

          <Route path='/update' element={
                                  
                                  <UpdateEmployeeForm />
                              } /> 
          
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
