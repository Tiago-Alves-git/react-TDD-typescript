import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/logos/beijaFlor.jpeg';
import HotelIcon from '@mui/icons-material/Hotel';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import { Link } from '@mui/material';

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
            sx={{ display: 'flex', marginRight: '50vw' }}
            >
              <img src={Logo} aria-label='logo' width='50px' height='50px' style={{ borderRadius: '50px' }}></img>
            </IconButton>
            <Box>
            <Button color='inherit' aria-label='loginButton'> Login </Button>
            <Button color='inherit' aria-label='SignUp'> SignUp </Button>
            </Box>
          </Toolbar>
          <Toolbar sx={{ display: 'flex', justifyContent: 'flex-start', gap: '20px', marginLeft: '9vw', marginTop: '10vh' }}>
            <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <IconButton type='button' aria-label='categoryHosting'
            onClick={() => {
              console.log('i work!')
            }}
            >
              <HotelIcon />
            </IconButton>
            <IconButton
            onClick={() => {
              console.log('i work!')
            }}
            >
            <Typography variant='subtitle2' color='white'> Hospedagem </Typography>
            </IconButton>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <IconButton type='button' aria-label='categoryBooking'
            onClick={() => {
              console.log('i work!')
            }}
            >
              <BookOnlineIcon />
            </IconButton>
            <IconButton
            onClick={() => {
              console.log('i work!')
            }}
            >
            <Typography variant='subtitle2' color='white'> Reservas </Typography>
            </IconButton>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <IconButton type='button' aria-label='categoryFlights'
            onClick={() => {
              console.log('i work!')
            }}
            >
              <AirplaneTicketIcon />
            </IconButton>
            <IconButton
            onClick={() => {
              console.log('i work!')
            }}
            >
            <Typography variant='subtitle2' color='white'> Voos </Typography>
            </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    )
  }
}

export default NavBar