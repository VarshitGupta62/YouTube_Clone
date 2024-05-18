import React from 'react'
import { BrowserRouter , Routes , Route  } from 'react-router-dom'
import App from '../App'
import { Home , YourChannel , History , Playlist , Like , CustomizeChannel} from '../components'

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
        </Route> 
     </Routes>
     </BrowserRouter>
     </>
  )
}

export default Routing