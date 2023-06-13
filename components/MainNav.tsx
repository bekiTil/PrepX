import React, { useState, ReactNode } from 'react';
import { Box, Drawer, Avatar, AppBar, Toolbar, List, ListItem, ListItemIcon, ListItemText, IconButton, Typography } from '@mui/material';
import { AccountCircle, Dashboard, ShoppingCart, Menu as MenuIcon } from '@mui/icons-material';
import { deepOrange } from '@mui/material/colors';

const sidebarWidth = 240;

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'white' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{ color: 'black' }} />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <p className="font-typograhica text-black">Prep<span className="text-purple-600">X</span></p>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>M</Avatar>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
          
        }}
        PaperProps={{
            sx: {
              backgroundColor: "black",
              color:"white",
              borderRadius:10,
            }
          }}
        open={!open}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List sx={{ width: '100%' }}>
            <ListItem button sx={{ width: '100%' }}>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button sx={{ width: '100%' }}>
              <ListItemIcon>
                <ShoppingCart />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItem>
            <ListItem button sx={{ width: '100%' }}>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, marginTop: '64px', marginLeft: 0 }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
