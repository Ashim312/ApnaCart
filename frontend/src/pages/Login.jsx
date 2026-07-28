import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const {token, setToken, navigate, backendUrl} = useContext(ShopContext)
  
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    try {
      if (currentState === 'Login') {
        const response = await axios.post(backendUrl + '/api/user/login' , {email,password})
        
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
          toast.success(response.data.message)
        } else {
          toast.error(response.data.message)
        }
        
      } else {
        const response =await axios.post(backendUrl + '/api/user/register', {name,email,password})
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
          toast.success(response.data.message)
        } else {
          toast.error(response.data.message)
        }
        
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(()=>{
      if (token) {
        navigate('/')
      } else {
        
      }
  },[token])

  return (
    <form onSubmit={onSubmitHandler} className='max-w-md mx-auto mt-16 border p-8 rounded-lg' >
      <h2 className='prata-regular text-3xl font-medium mb-6 text-center' >{currentState}</h2>
      <div className='flex flex-col gap-4' >
        {currentState === 'Login' ? '' : <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Username' className='border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-950' required /> }
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Email' className='border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-950' required />
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='Password' className='border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-950' required />
        <button className='bg-black text-white py-3 rounded-md hover:bg-violet-950 transition-colors' >{currentState}</button>
      </div>
      <p className='text-sm text-center mt-4' >
        {currentState === 'Sign Up' ? "Already have an account?" : "Don't have an account?"}
        <span onClick={() => setCurrentState(currentState === 'Sign Up' ? 'Login' : 'Sign Up')} className='text-violet-900 font-medium cursor-pointer ml-1' >
          {currentState === 'Sign Up' ? 'Login' : 'Sign Up'}
        </span>
      </p>

      
    </form>
  )
}

export default Login
