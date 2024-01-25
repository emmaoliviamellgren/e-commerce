import React from 'react'
import RegisterForm from '../components/RegisterForm'

const RegisterPage = () => {
  return (
    <div className='mx-auto my-20 w-[28rem] lg:w-[60rem] px-16 xl:px-56 py-20 border border-slate-300 shadow-md shadow-slate-400 bg-white rounded-lg'>
      <h1 className='text-xl text-center'>Register a new account</h1>
      <RegisterForm/>
    </div>
  )
}

export default RegisterPage