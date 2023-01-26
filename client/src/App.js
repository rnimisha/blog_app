import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

// styles
import GlobalStyles from './assets/styles/Globalstyles.styled.js'

import Homepage from './container/Homepage/Homepage'
import Loginpage from './container/Loginpage/Loginpage'
import Navbar from './components/navbar/Navbar.js'
import Registerpage from './container/Registerpage/Registerpage.js'
import Addblog from './container/Addblog/Addblog.js'
import Blog from './container/Blog/Blog.js'

const App = () => {
  return (
    <>
       <GlobalStyles/>
       <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/login' element={<Loginpage/>}/>
            <Route path='/register' element={<Registerpage/>}/>
            <Route path='/addblog' element={<Addblog/>}/>
            <Route path='/blogs' element={<Blog/>}/>
        </Routes>
       </Router>
    </>

  )
}

export default App
