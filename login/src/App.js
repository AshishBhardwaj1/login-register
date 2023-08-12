import React from 'react'
import{BrowserRouter,Route, Routes} from 'react-router-dom'
import RegistrationPage from './RegistrationPage'
import LoginPage from './LoginPage'
const App = () => {
  return (
    <div>



<BrowserRouter>
<Routes>
<Route path='/login' element={<LoginPage/>}/>
<Route path='/registration' element={<RegistrationPage/>}/>

</Routes>

</BrowserRouter>


    </div>
  )
}

export default App
