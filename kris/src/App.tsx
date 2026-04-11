
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Sidebar from './Components/Sidebar'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Navbar from './Components/Navbar'
import LeaveManagement from './pages/LeaveManagement'
import LeaveRecall from './pages/LeaveRecall'
import LeaveHistory from './pages/LeaveHistory'
import LeaveSetting from './pages/LeaveSetting'
import ReliefOfficers from './pages/ReliefOfficers'
import EmpRegister from './pages/Emp section/empregister'
import EmpLogin from './pages/Emp section/emplogin'
import Empdashboard from './pages/Emp section/empdashboard'
import EmpLeave from './pages/Emp section/empleave'
import AnnualLeave from './pages/Emp section/AnnualLeave'
import SickLeave from './pages/Emp section/SickLeave'
import EmpLeaveRecall from './pages/Emp section/empLeaveRecall'
import UpdateProfile from './pages/Emp Profile/updateProfile'
import Profile from './pages/Emp Profile/profile'
import Contact from './pages/Emp Profile/contact' 
import NextOfKin from './pages/Emp Profile/Nextofkin'
import Education from './pages/Emp Profile/Education'
import EducationForm from './pages/Emp Profile/EducationForm' 
import Guarantor from './pages/Emp Profile/guarantor'
import GuarantorForm from './pages/Emp Profile/guarantorForm' 
import FamilyDetails from './pages/Emp Profile/FamilyDetails'
import FamilyDetailsForm from './pages/Emp Profile/familyDetailsForm'

// function App() {
//   const location = useLocation();
//   const isLoginPage = location.pathname === "/login";
//   const isRegisterPage = location.pathname === "/register";
//   return (
//     <div>
//       {!isLoginPage && <Sidebar />}
//       {!isLoginPage && <Navbar />}
//       <div className={!isLoginPage ? "main-content" : ""}>
//       <div className={!isRegisterPage? "main-content" : ""}>
//       <Routes>
//         <Route path="/login" element={<Login />}></Route>
//         <Route path="/dashboard/*" element={<Dashboard />}></Route>
//         <Route path="/leave-management" element={<LeaveManagement />}></Route>
//         <Route path="/leaverecall" element={<LeaveRecall />}></Route>
//         <Route path="/leavehistory" element={<LeaveHistory />}></Route>
//         <Route path="/leavesetting" element={<LeaveSetting/>}></Route>
//         <Route path='/reliefofficers' element={<ReliefOfficers/>}></Route>
//         <Route path='/register' element={<Register/>}></Route>
//       </Routes>
//     </div>
//     </div>  
//     </div> 
//       )
// }

function App() {
  const location = useLocation();

  const hideLayout = ["/login", "/empregister","/emplogin", "/empdashboard","/empleave","/educationForm","/Nextofkin","/guarantor","/guarantorForm",
    "/annualLeave","/sickLeave","/empLeaveRecall","/updateProfile","/profile","/contact","/education","/familyDetails","/familyDetailsForm"].includes(location.pathname);

  return (
    <div>
      {!hideLayout && <Sidebar />}
      {!hideLayout && <Navbar />}
      

      <div className={!hideLayout ? "main-content" : ""}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/empregister" element={<EmpRegister />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/leave-management" element={<LeaveManagement />} />
          <Route path="/leaverecall" element={<LeaveRecall />} />
          <Route path="/leavehistory" element={<LeaveHistory />} />
          <Route path="/leavesetting" element={<LeaveSetting />} />
          <Route path="/reliefofficers" element={<ReliefOfficers />} />
          <Route path="/emplogin" element={<EmpLogin/>}/>
          <Route path="/empdashboard" element={<Empdashboard />}/>
          <Route path="/empleave" element={<EmpLeave/>}/>
          <Route path="/annualLeave" element={<AnnualLeave/>}/>
          <Route path="/sickLeave" element={<SickLeave/>}/>
          <Route path="/empLeaveRecall" element={<EmpLeaveRecall/>}/>
          <Route path="/updateProfile" element={<UpdateProfile/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/Nextofkin" element={<NextOfKin/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/educationForm" element={<EducationForm/>}/>
          <Route path="/guarantor" element={<Guarantor/>}/>
          <Route path="/guarantorForm" element={<GuarantorForm/>}/>
          <Route path="/familyDetails" element={<FamilyDetails/>}/>
          <Route path="/familyDetailsForm" element={<FamilyDetailsForm/>}/>
        </Routes>
        
      </div>
    </div>
  );
}

export default App
