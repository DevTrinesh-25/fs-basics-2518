import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import LeaveManagement from './pages/Leavemanagement'
import LeaveRecall from './pages/leaverecall'

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/leave-management" element={<LeaveManagement />} />
      <Route path="/dashboard" element={<LeaveManagement/>}/>
      <Route path="/dashboard/leaverecall" element={<LeaveRecall />}/>
    </Routes>
  )
}

export default App
