import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/logos/beijaFlor.jpeg';

export class NavBar extends Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
            size='large'
            color='inherit'
            aria-label='logo'
            sx={{ flexGrow: 1 }}>
              <img src={Logo} aria-label='logo' width='50px' height='50px' style={{ borderRadius: '50px' }}></img>
            </IconButton>
            <Button color='inherit' aria-label='loginButton'> Login </Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
  }
}

export default NavBar