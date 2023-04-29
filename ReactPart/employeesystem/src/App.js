import Home from "./container/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Addemployee from "./container/Addemployee";

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
          
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
