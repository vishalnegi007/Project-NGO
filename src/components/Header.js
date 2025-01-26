import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assests/images/logo.png';

const Header = () => {
  return (
    <header>
    <div className="logo">
      <img src={logo} alt="Company Logo" />
    </div>
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contactus">Contact</Link></li>
      </ul>
    </nav>
  </header>
  )
}

export default Header