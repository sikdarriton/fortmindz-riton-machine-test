import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
    
} from "react-router-dom";

import EmployeeList from "./Components/EmployeeList";
import CreateEmployee from "./Components/CreateEmployee";
import EditEmployee from "./Components/EditEmployee";

function App() {

  return (
 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<EmployeeList />} />
      <Route path="/create" element={<CreateEmployee />} />
      <Route path="/edit/:id" element={<EditEmployee />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;
