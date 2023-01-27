import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../features/user/userSlice'
import { Link, useLocation } from 'react-router-dom'

// constants
import { NAVIGATIONS } from '../../constants/navigations'

// styles
import { LogoContainer, MenuContainer, Nav, Item, Logo } from './Navbar.styled'

import LOGOIMG from '../../assets/svgs/result.svg'

const Navbar = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const username = useSelector(state => state.user.username)

  return (
    <Nav green={location.pathname === '/'}>
        <LogoContainer green={location.pathname === '/'}>
          <Link to='/'>
            <Logo src={LOGOIMG} alt="" />
          </Link>
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
            {
                username.trim().length === 0
                  ? <Link
                   to='/Login'>
                        <Item>
                            Login
                        </Item>
                    </Link>
                  : <Link
                  onClick={() => {
                    dispatch(logOut())
                  }}
                  to='/'>
                        <Item>
                            Logout
                        </Item>
                    </Link>
            }

        </MenuContainer>
    </Nav>
  )
}

export default Navbar
