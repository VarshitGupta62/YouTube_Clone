import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from '../App'
import { Home, YourChannel, History, Playlist, Like, CustomizeChannel, Signup, Login, Settings, Shorts, Video } from '../components'

function Routing() {
  const [user, setUser] = useState(null);

  // Helper function to check if the user is authenticated
  const isAuthenticated = () => user && user.data && user.data._id;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/your_channel' element={isAuthenticated() ? <YourChannel  userdata={user.data} /> : <Navigate to='/login' />} />
          <Route path='/history' element={isAuthenticated() ? <History /> : <Navigate to='/login' />} />
          <Route path='/playlist' element={isAuthenticated() ? <Playlist /> : <Navigate to='/login' />} />
          <Route path='/like' element={isAuthenticated() ? <Like /> : <Navigate to='/login' />} />
          <Route path='/subscriptions' element={<Home />} />
          <Route path='/customize_channel' element={isAuthenticated() ? <CustomizeChannel userdata={user.data}/> : <Navigate to='/login' />} />
          <Route path='/settings' element={isAuthenticated() ? <Settings /> : <Navigate to='/login' />} />
          <Route path='/shorts' element={isAuthenticated() ? <Shorts /> : <Navigate to='/login' />} />
          <Route path='/watch' element={<Video />} />
        </Route>
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
