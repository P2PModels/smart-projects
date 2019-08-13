import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
// import MenuIcon from '@material-ui/icons/Menu';
import LanguageSelector from './LanguageSelector'
import { withRouter, Link } from 'react-router-dom'
import Avatar from './Avatar'
import { userActions } from '../actions'
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  grow: {
    flexGrow: 1,
    alignSelf: 'flex-start',
  },
  avatar: {
    margin: 10,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
})

function ButtonAppBar({ children, history }) {
  const user = useSelector(state => state.authentication.user)
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null)
  const classes = useStyles()
  const open = Boolean(anchorEl)
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Container className={classes.flex}>
            <div className={classes.grow}>
              <Link to="/">
                <img
                  style={{ position: 'absolute', zIndex: 1 }}
                  src="/images/logo.png"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className={classes.flex}>
              <LanguageSelector />

              {!user ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => history.push('/login')}
                >
                  Log in
                </Button>
              ) : (
                <div>
                  <IconButton
                    aria-owns={open ? 'menu-appbar' : undefined}
                    aria-haspopup="true"
                    onClick={e => setAnchorEl(e.currentTarget)}
                    color="inherit"
                  >
                    <Avatar user={user} />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                  >
                    <MenuItem onClick={() => setAnchorEl(null)}>
                      Profile
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setAnchorEl(null)
                        dispatch(userActions.logout())
                      }}
                    >
                      Logout
                    </MenuItem>
                  </Menu>
                </div>
              )}
            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withRouter(ButtonAppBar)
