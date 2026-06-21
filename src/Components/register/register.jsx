import React from 'react'
// import style from './Register.module.css'
import { useFormik } from 'formik' ;


export default function Register() {

  function submitregister() {

    console.log(formik.values);
  }

let formik = useFormik ({
  
  initialValues: {
    name: '',
    phone: '',
    email: '',
    password: '', 
    rePassword: ''
  },
  onSubmit: submitregister

})






  return <>



  <div className='container text-center py-5 w-50' >
      <h1 >Register</h1>

    <form onSubmit={formik.handleSubmit}>

   <label htmlFor="name">Name : </label>
    <input 
     id='name' 
     name='name'
     type="text" 
     className='form-control my-2' 
     placeholder='Name' 
     value={formik.values.name} 
     onChange={formik.handleChange} 
     onBlur={formik.handleBlur} 
     />
    
    <label htmlFor="phone">Phone : </label>
    <input 
      id='phone' 
      name='phone' 
      value={formik.values.phone} 
      onChange={formik.handleChange} 
      onBlur={formik.handleBlur} 
      type="tel"  
      className='form-control my-2' 
      placeholder='Phone' />

    <label htmlFor="email">Email : </label>
    <input 
      id='email' 
      name='email' 
      value={formik.values.email} 
      onChange={formik.handleChange} 
      onBlur={formik.handleBlur} 
      type="email" 
      className='form-control my-2' 
      placeholder='Email' />

    <label htmlFor="password">Password : </label>
    <input 
      id='password' 
      name='password' 
      value={formik.values.password} 
      onChange={formik.handleChange} 
      onBlur={formik.handleBlur} 
      type="password" 
      className='form-control my-2 ' 
      placeholder='password' />
    
    <label htmlFor="rePassword">Re-enter Password : </label>
    <input 
       id='rePassword' 
       name='rePassword' 
       value={formik.values.rePassword} 
       onChange={formik.handleChange} 
       onBlur={formik.handleBlur} 
       type="password" 
       className='form-control my-2' 
       placeholder='rePassword'  />


    <button className='btn btn-primary mt-3 text-white' type="submit">Register</button>  


    </form>


    </div>

  </>

 
}
