import React from 'react'
// import style from './Register.module.css'


export default function Register() {
  return <>
  <div className='container text-center py-5' >
    <h1 >Register</h1>
    <input type="name" className='form-control w-50 m-auto my-3' placeholder='Name' />
    <input type="email" className='form-control w-50 m-auto my-3' placeholder='Email' />
    <input type="password" className='form-control w-50 m-auto my-3' placeholder='Password' />
    <input type="repassword" className='form-control w-50 m-auto my-3' placeholder='rePassword' />
    <button className='btn btn-primary mt-3'>Register</button>  

  </div>

  </>

 
}
