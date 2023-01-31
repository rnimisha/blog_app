import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../features/user/userSlice'
import { Link, useLocation } from 'react-router-dom'

// constants
import { NAVIGATIONS } from '../../constants/navigations'

// styles
import { LogoContainer, MenuContainer, Nav, Item, Logo, InnerItem } from './Navbar.styled'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

import LOGOIMG from '../../assets/svgs/result.svg'

const Navbar = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const username = useSelector(state => state.user.username)

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

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
                  : <Tooltip title="Account settings">
                      <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                      >
                        <Avatar sx={{ width: 32, height: 32 }}>{username[0]}</Avatar>
                      </IconButton>
                    </Tooltip>
            }
        </MenuContainer>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          {/* <MenuItem>
            My Profile
          </MenuItem> */}
          <Link
            to='/myblogs'>
                <InnerItem>My Blogs</InnerItem>
            </Link>
          <Divider />
            <Link onClick={() => {
              dispatch(logOut())
            }}
            to='/'>
                <InnerItem>Logout</InnerItem>
            </Link>
        </Menu>
    </Nav>
  )
}

export default Navbar
