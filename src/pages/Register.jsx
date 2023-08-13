import React from 'react'
import { Link } from 'react-router-dom';
import LoginImg from '../assets/login_img.jpg';

const Register = () => {
  return (
    <div className='auth'>
      <div className='form register-form'>
        <h1>Register</h1>
        <form action="">
          <input type="text" name="name" id="name" placeholder=' ' required />
          <label for="name" className='name-label'>Name</label>
          <input type="email" name="email" id="email" placeholder=' ' required />
          <label for="email" className='email-label'>Email</label>
          <input type="password" name="password" id="password" placeholder=' ' required />
          <label for="password" className='password-label'>Password</label>
          <input type="password" name="confirm-password" id="confirm-password" placeholder=' ' required />
          <label for="confirm-password" className='confirm-password-label'>Confirm Password</label>
          <button type="submit">Login</button>
          <span>Don't you have an account? <Link to={'/login'}>Sign In</Link></span>
        </form>
      </div>
      <div className='form-img'>
        <img src={LoginImg} alt="" />
      </div>
    </div>
  )
}

export default Register;
