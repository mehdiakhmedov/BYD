import { useState } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Main from './component/Main'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Contact from './component/Contact'
import About from './component/About'
import Home from './component/Home'
import Test from './component/Test'
import Seal from './component/Seal'
import Dolphin from './component/Dolphin'
import Bydhan from './component/Bydhan'
import Global from './component/Global'
import Bydconnect from './component/Bydconnect'
import Dolphinnews from './component/Bydconnect'
import ScrollToTop from './component/ScrollToTop'
import Newdetails from './component/Newdetails'
import Aboutus from './component/Aboutus'
import Greenworld from './component/Greenworld'
import Bladebattery from './component/Bladebattery'
import Bydsuperdm from './component/Bydsuperdm'
import Eplatform from './component/Eplatform'








function App() {

  return (
    <>

     <BrowserRouter>
      <Header /> 

      <Routes>
       
        <Route path='/' element={<Main />} />
        
       
        <Route path='/Seal' element={<Seal />} />
        
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/Dolphin' element={<Dolphin />} />
        <Route path='/BydHan' element={<Bydhan />} />
        <Route path='/Global' element={<Global />} />
        <Route path='/Bydconnect' element={<Bydconnect />} />
        <Route path='/Dolphinnews' element={<Dolphinnews />} />
        <Route path="/news/:id" element={<Newdetails />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/greenworld" element={<Greenworld />} />
        <Route path="/bladebattery" element={<Bladebattery/>} />
        <Route path="/bydsuperdom" element={<Bydsuperdm/>} />
        <Route path="/eplatform" element={<Eplatform/>} />
      </Routes>

      <Footer /> 
      <ScrollToTop />
    </BrowserRouter>
      
    </>
  )
}



export default App
