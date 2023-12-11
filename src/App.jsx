import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import index from './Components/Body/index/index'
import AdminLogin from './Components/Body/ADMIN/AdminLogin/AdminLogin'
import StaffLogin from './Components/Body/STAFF/StaffLogin/StaffLogin'
import StaffReg from './Components/Body/STAFF/StaffReg/StaffReg'
import Adminpannel from './Components/Body/ADMIN/Adminpannel/Adminpannel'
import Adminreg from './Components/Body/ADMIN/Adminreg/Adminreg'
import Adminhome from './Components/Body/ADMIN/Adminhome/Adminhome'
import Studentreg from './Components/Body/STUDENTS/Studentreg/Studentreg'
import Studentlogin from './Components/Body/STUDENTS/Studentlogin/Studentlogin'
import staffHome from './Components/Body/STAFF/staffHome/staffHome'

function App() {
  return (
    <>
    
    <BrowserRouter>   
    <Routes>
      
      <Route path='/' Component={index}/>
      <Route path='/adminlogin' Component={AdminLogin}/>
      <Route path='/stafflogin' Component={StaffLogin}/>
      <Route path='/staffreg' Component={StaffReg}/>
      <Route path='/staffHome' Component={staffHome}/>
      <Route path='/adminregister' Component={Adminreg}/>
      <Route path='/adminpannel' Component={Adminpannel}/>
      <Route path='/adminhome' Component={Adminhome}/>
      <Route path='/studentreg' Component={Studentreg}/>
      <Route path='/studentlogin' Component={Studentlogin}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
