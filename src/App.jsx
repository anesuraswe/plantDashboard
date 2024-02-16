import './App.css'
//import Content from './components/pages/Content'
import Dashboard from './components/pages/Dashboard'
import Operators from './components/pages/Operators'
import Plant from './components/pages/Plant'
import SideBar from './components/pages/SideBar'
import Sites from './components/pages/Sites'
import TopBar from './components/pages/TopBar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Workshop from './components/pages/Workshop'
import Stores from './components/pages/Stores'
import Settings from './components/pages/Settings'
import Footer from './components/pages/Footer'

function App() {
   return (
    <>

    {/* <SideBar/>
    <TopBar/>
    <Content/> */}
    <Router>
    <SideBar/>
    <TopBar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/operators" element={<Operators/>}/>
        <Route path="/sites" element={<Sites/>}/>
        <Route path="/plant" element={<Plant/>}/>
        <Route path="/workshop" element={<Workshop/>}/>
        <Route path="/stores" element={<Stores/>}/>
        <Route path="settings" element={<Settings/>}/>
      </Routes>
      <Footer/>
    </Router>



  
    </>
  )
}

export default App
