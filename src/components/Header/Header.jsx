import React from 'react'
import { HeaderStyle } from './Header.styled'
import { NavLink } from 'react-router-dom'

import headerMenu from '../../assets/img/icons/header_menu.svg'

export const Header = () => {
  return (
    <HeaderStyle>
        <div className='container-main'>
            <div className="header">
                <NavLink to={'/'}>
                    <h2>
                        Learning Quotes
                    </h2>
                </NavLink>
                <div className="header__review">
                    <a href="foo">
                        Features
                    </a>
                    <a href="foo">
                        Reviews
                    </a>
                </div>
                <div className="header__login">
                    <NavLink to={'/sign-up'} href="foo">
                        Sign Up
                    </NavLink>
                    <NavLink to={'/login'} className='header__login_log'>
                        Login
                    </NavLink>
                </div>
                <div className="header__mob">
                    <img className='header__burger' src={headerMenu} alt="menu icon" />
                    <div className="header__burger__body">
                        
                    </div>
                </div>
            </div>
        </div>
    </HeaderStyle>
  )
}
