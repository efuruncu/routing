import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import './styles.css';

function AuthLayout() {
  return (
    <div className='auth-container'>
      <div className='auth-menu'>
      <Link to="/auth"> Login</Link>
      <Link to="/auth/register"> Signup</Link>
      </div>
        <hr/>
        <Outlet/>
    </div>
  )
}

export default AuthLayout;