import Login from "./Component/LoginPage/login.jsx";
import SignUp from "./Component/SignUpPage/SignUpPage.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Pannel from "./Component/Admin/Panel.jsx";
import Dashboard from "./Component/Admin/Pages/dashboard.jsx";
import Leave from "./Component/Admin/Pages/Leave.jsx";
import Payroll from "./Component/Admin/Pages/Payroll.jsx";
import Performance from "./Component/Admin/Pages/Performance.jsx";
import Reports from "./Component/Admin/Pages/Reports.jsx";
import Settings from "./Component/Admin/Pages/Settings.jsx";
import Attendance from "./Component/Admin/Pages/Attendance.jsx";
import Employees from "./Component/Admin/Pages/Employees.jsx";


function App(){
  return (
    <>

<BrowserRouter>
<Routes>
  <Route path="/" element={<Login/>}/>
  <Route path="/SignUpPage" element={<SignUp/>}/>
  <Route path="/admin" element={<Pannel/>}>
    <Route index element={<Dashboard/>} />
    <Route path="dashboard" element={<Dashboard/>} />
    <Route path="employees" element={<Employees/>} />
    <Route path="attendance" element={<Attendance/>} />
    <Route path="leave" element={<Leave/>} />
    <Route path="payroll" element={<Payroll/>} />
    <Route path="performance" element={<Performance/>} />
    <Route path="reports" element={<Reports/>} />
    <Route path="settings" element={<Settings/>} />


  </Route>
  
  


</Routes>
</BrowserRouter>
    
    </>
  )
}

export default App;