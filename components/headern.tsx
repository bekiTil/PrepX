import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box, Avatar } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { deepOrange } from '@mui/material/colors';
import { useRouter } from 'next/router';

const NavbarAuth = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter()
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
      <AppBar  sx={{ paddingX:2, backgroundColor: 'black' }}>
        
        <Toolbar className="toolbar">
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleMenu}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
         
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          <p className="font-typograhica">Prep<span className="text-purple-600">X</span></p>
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button  onClick={()=>{router.push("home")}}color="inherit">Home</Button>
            <Button  onClick={()=>{router.push("finance")}} color="inherit">Finance</Button>
            <Button color="inherit">Message</Button>
            <Button color="inherit">Notification</Button>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>M</Avatar>
          </Box>
        </Toolbar>
        {menuOpen && (
          <Box className="mobile-menu">
            <Button color="inherit" onClick={toggleMenu}>Home</Button>
            <Button color="inherit" onClick={toggleMenu}>Finance</Button>
            <Button color="inherit" onClick={toggleMenu}>Message</Button>
            <Button color="inherit" onClick={toggleMenu}>Notification</Button>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>M</Avatar>
          </Box>
        )}
       
      </AppBar>
    );
  };
  
  export default NavbarAuth;