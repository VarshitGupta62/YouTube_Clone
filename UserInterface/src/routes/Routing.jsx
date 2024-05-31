import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from '../App'
import { Provider } from 'react-redux';
import store from '../store/store.js';
import { Home, YourChannel, History, Playlist, Like, CustomizeChannel, Signup, Login, Settings, Shorts, Video, UploadVideo , AllVideo , AuthLayout  } from '../components'

function Routing() {
   

  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
         
          <Route index element={  
            <AuthLayout>
              <Home />
            </AuthLayout>
          } />
         

          <Route path='your_channel/*' element={<YourChannel/>}>
            <Route path='all_video' element={< AllVideo />} />
            <Route path='upload_video' element={< UploadVideo />} />
          </Route>

          <Route path='history' element={ <History />} />
          <Route path='playlist' element={ <Playlist />} />
          <Route path='like' element={  <Like /> } />
          <Route path='subscriptions' element={<Home />} />
          {/* <Route path='customize_channel' element={ <CustomizeChannel/> } /> */}
          {/* <Route path='settings' element={  <Settings/>} /> */}
          <Route path='shorts' element={ <Shorts />} />
          <Route path='watch' element={<Video />} />
        </Route>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default Routing
