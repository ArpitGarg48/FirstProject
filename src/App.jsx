import { Dashboard } from "./Component/Admin/Dashboard";
import { Attendence } from "./Component/Admin/Pages/Attendence";
import { Employees } from "./Component/Admin/Pages/Employees";
import { Leave } from "./Component/Admin/Pages/Leave";
import { Payroll } from "./Component/Admin/Pages/Payroll";
import { Performance } from "./Component/Admin/Pages/Performance";
import { Report } from "./Component/Admin/Pages/Report";
import { Setting } from "./Component/Admin/Pages/Setting";
import Panel from "./Component/Admin/Panel";
import Login from "./Component/LoginPage/Login";
import RequireAuth from "./Component/RequireAuth";
import SignUp from "./Component/SignUpPage/SignUp";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/panel"
            element=  { <RequireAuth>  
                          <Panel /> 
                        </RequireAuth>
                      }
          >
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="employees" element={<Employees />} />
            <Route path="leave" element={<Leave />} />
            <Route path="attendence" element={<Attendence />} />
            <Route path="payroll" element={<Payroll />} />
            <Route path="performance" element={<Performance />} />
            <Route path="report" element={<Report />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App