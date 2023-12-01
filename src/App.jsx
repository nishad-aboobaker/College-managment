import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Body/Home/Home'
import AdminLogin from './Components/Body/AdminLogin/AdminLogin'
import StaffLogin from './Components/Body/StaffLogin/StaffLogin'
import StaffReg from './Components/Body/StaffReg/StaffReg'
import Adminpannel from './Components/Body/Adminpannel/Adminpannel'
import Adminreg from './Components/Body/Adminreg/Adminreg'
import Adminhome from './Components/Body/Adminhome/Adminhome'
import Studentreg from './Components/Body/Studentreg/Studentreg'
import Studentlogin from './Components/Body/Studentlogin/Studentlogin'

function App() {
  return (
    <>
    
    <BrowserRouter>    
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/adminlogin' Component={AdminLogin}/>
      <Route path='/stafflogin' Component={StaffLogin}/>
      <Route path='/staffreg' Component={StaffReg}/>
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
