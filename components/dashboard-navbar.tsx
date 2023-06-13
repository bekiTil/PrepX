import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { MouseEvent } from "react";





const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
//   backgroundColor: theme.palette.background.paper,
//   boxShadow: theme.shadows[3],
}));

export const DashboardNavbar = (props: { [x: string]: any; onSidebarOpen: any; }) => {
  const { onSidebarOpen, ...other } = props;


  const handleLogout = (e: any) => {
    e.preventDefault();
   
   
   
  };
  return (
    <>
      <DashboardNavbarRoot
        
        {...other}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          {/* <Tooltip title="Search">
            <IconButton sx={{ ml: 1 }}>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Tooltip> */}
          <Box sx={{ flexGrow: 1 }} />
          {/* <Tooltip title="Contacts">
            <IconButton sx={{ ml: 1 }}>
              <UsersIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton sx={{ ml: 1 }}>
              <Badge badgeContent={4} color="primary" variant="dot">
                <BellIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip> */}
        
          <Avatar
            sx={{
              height: 40,
              width: 40,
              ml: 1,
            }}
            // src="/static/images/avatars/avatar_1.png"
          >
            {/* <UserCircleIcon fontSize="small" /> */}
          M
            {/* {...stringAvatar('Kent Dodds')} */}
          </Avatar>
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};
