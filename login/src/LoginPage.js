import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default function LoginPage() {
  const [loginData , setLoginData] =useState({
    username:'',
    password:''
  })
  const handleLogin =(e)=>{
const {name, value} =e.target
setLoginData((prevData)=>({
...prevData,
[name]:value
}))
  }
 async function handleSubmit(e) {
e.preventDefault()
try {

  const response = await axios.post('http://localhost:8000/login',loginData);
  const {success,message} =response.data;
  if (success) {
    console.log('login suuceefully');
  }else{
    console.log(message);
  }
}catch(error){
  console.log(error);
}
setLoginData({
  username:'',
  password:''
})
  }
  return (
    <div>
<h1>Login page</h1>
<form onSubmit={handleSubmit}> 
  <input type="text" name='username' value={loginData.username} placeholder='username' onChange={handleLogin} required/>
  <input type="password" name='password' value={loginData.password} placeholder='password' onChange={handleLogin} required/>
  <button type='submit'>Login</button>
  <p>not registered ?
    <Link to = '/registraton'>Register</Link>
  </p>
</form>
    </div>
  )
}
