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
import StaffDetails from './Components/Body/STAFF/StaffDetails/staffDetails'
import StudentsDetails from './Components/Body/STUDENTS/StudentDetails/StudentsDetails'
import staffForgotPassword from './Components/Body/STAFF/staffForgotPassword/staffForgotPassword'
import staffForgotUsername from './Components/Body/STAFF/staffForgotUsername/staffForgotUsername'
import staffUpdate from './Components/Body/STAFF/staffUpdate/staffUpdate'
import studentUpdate from './Components/Body/STUDENTS/studentUpdate/studentUpdate'
import UploadMark from './Components/Body/STUDENTS/uploadMark/UploadMark'
import studentHome from './Components/Body/STUDENTS/studentHome/studentHome'

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
      <Route path='/studentreg/:user' Component={Studentreg}/>
      <Route path='/studentlogin' Component={Studentlogin}/>
      <Route path='/staffDetails/:id' Component={StaffDetails}/>
      <Route path='/StudentsDetails/:id' Component={StudentsDetails}/>
      <Route path='/staffForgotPassword' Component={staffForgotPassword}/>
      <Route path='/staffForgotUsername' Component={staffForgotUsername}/>
      <Route path='/staffUpdate/:id' Component={staffUpdate}/>
      <Route path='/studentUpdate/:id' Component={studentUpdate}/>
      <Route path='/uploadMark/:id' Component={UploadMark}/>
      <Route path='/studentHome/:id' Component={studentHome}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
