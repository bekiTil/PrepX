import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
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
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Register</Button>
            <Button color="inherit">Login</Button>
          </Box>
        </Toolbar>
        {menuOpen && (
          <Box className="mobile-menu">
            <Button color="inherit" onClick={toggleMenu}>Home</Button>
            <Button color="inherit" onClick={toggleMenu}>About</Button>
            <Button color="inherit" onClick={toggleMenu}>Register</Button>
            <Button color="inherit" onClick={toggleMenu}>Login</Button>
          </Box>
        )}
       
      </AppBar>
    );
  };
  
  export default Navbar;