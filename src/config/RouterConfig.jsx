import {Routes , Route} from 'react-router-dom'
import Home from '../pages/Home'
import UserDetails from '../component/UserDetails'
import React from 'react'

function RouterConfig() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/user-details/:id' element={<UserDetails />} />
        </Routes>
    </div>
  )
}

export default RouterConfig