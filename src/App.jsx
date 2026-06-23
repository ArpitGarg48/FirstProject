import { Dashboard } from "./Component/Admin/Dashboard";
import { Employees } from "./Component/Admin/Pages/Employees";
import Panel from "./Component/Admin/Panel";
import Login from "./Component/LoginPage/Login";
import SignUp from "./Component/SignUpPage/SignUp";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/panel" element={<Panel/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="employees" element={<Employees/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
