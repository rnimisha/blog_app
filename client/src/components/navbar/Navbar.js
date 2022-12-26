import React from 'react'
import { Link } from 'react-router-dom'

// constants
import { NAVIGATIONS } from '../../constants/navigations'

// styles
import { LogoContainer, MenuContainer, Nav, Item } from './Navbar.styled'

const Navbar = () => {
  return (
    <Nav>
        <LogoContainer>
            logo here
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

        </MenuContainer>
    </Nav>
  )
}

export default Navbar
