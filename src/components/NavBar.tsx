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
        <AppBar position='static' sx={{ height: '30vh' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <IconButton
            type='button'
            size='large'
            color='inherit'
            aria-label='logo'
            sx={{ display: 'flex' }}
            >
              <img src={Logo} aria-label='logo' width='50px' height='50px' style={{ borderRadius: '50px' }}></img>
            </IconButton>
            <Button color='inherit' aria-label='loginButton'> Login </Button>
            <Button color='inherit' aria-label='SignUp'> SignUp </Button>
          </Toolbar>
          <Toolbar>
            <IconButton type='button' aria-label='categoryHosting'></IconButton>
            <IconButton type='button' aria-label='categoryBooking'></IconButton>
            <IconButton type='button' aria-label='categoryFlights'></IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    )
  }
}

export default NavBar