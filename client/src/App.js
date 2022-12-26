import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

// styles
import GlobalStyles from './assets/styles/Globalstyles.styled.js'

import Homepage from './container/Homepage/Homepage'
import Loginpage from './container/Loginpage/Loginpage'

const App = () => {
  return (
    <>
       <GlobalStyles/>
       <Router>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/login' element={<Loginpage/>}/>
        </Routes>
       </Router>
    </>

  )
}

export default App
