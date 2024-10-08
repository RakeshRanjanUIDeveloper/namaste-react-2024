import React from 'react'
import { logo_URL } from '../utilis/constants'
const Header = () =>{
    return (
         <div className="header">
              <div className="logo-container">
                   <img src={logo_URL} className="logo" />
              </div>
              <div className="nav-items">
                   <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Cart</li>
                   </ul>
              </div>
         </div>
    )
}

export default Header