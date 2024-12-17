import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'

function LeftNavbar() {
  return ( 
    <div className='inline flex justify-start ml-28'>
        <Link to ="/"><img src={Logo} alt="logo"className='logo'/></Link>
    </div>
  )
}

export default LeftNavbar