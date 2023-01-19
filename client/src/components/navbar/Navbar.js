import React from 'react'
import { Link, useLocation } from 'react-router-dom'

// constants
import { NAVIGATIONS } from '../../constants/navigations'

// styles
import { LogoContainer, MenuContainer, Nav, Item, Logo } from './Navbar.styled'

import LOGOIMG from '../../assets/svgs/result.svg'

const Navbar = () => {
  const location = useLocation()

  return (
    <Nav green={location.pathname === '/'}>
        <LogoContainer green={location.pathname === '/'}>
            <Logo src={LOGOIMG} alt="" />
        </LogoContainer>
        <MenuContainer>
            {
                NAVIGATIONS.map((item, id) => {
                  return (
                        <Link to={item.path} key={id}>
                            <Item>
                                {item.label}
                            </Item>
                        </Link>
                  )
                })
            }
            <Link to='/Login'>
                <Item>
                    Login
                </Item>
            </Link>

        </MenuContainer>
    </Nav>
  )
}

export default Navbar
