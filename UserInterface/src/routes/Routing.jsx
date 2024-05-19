import React from 'react'
import { BrowserRouter , Routes , Route  } from 'react-router-dom'
import App from '../App'
import { Home , YourChannel , History , Playlist , Like , CustomizeChannel , Signup , Login , Settings , Shorts} from '../components'

function Routing() {
  return (
     <>
     <BrowserRouter>
     <Routes>
        <Route path='/'  element={<App/>} >
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/your_channel' element={<YourChannel/>} ></Route>
            <Route path='/history' element={<History/>} ></Route>
            <Route path='/playlist' element={<Playlist/>} ></Route>
            <Route path='/like' element={<Like/>} ></Route>
            <Route path='/subscriptions' element={<Home/>} ></Route>
            <Route path='/customize_channel' element={<CustomizeChannel/>} ></Route>
            <Route path='/settings' element={<Settings/>} ></Route>
            <Route path='/shorts' element={<Shorts/>} ></Route>
        </Route> 
            <Route path='/login' element={<Login/>} ></Route>
            <Route path='/signup' element={<Signup/>} ></Route>
     </Routes>
     </BrowserRouter>
     </>
  )
}

export default Routing