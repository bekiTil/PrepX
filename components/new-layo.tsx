import React, { ReactNode, useState } from "react";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavbarAuth from "./headern";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  ListItemButton,
  Menu,
  MenuItem,
  SvgIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BorderColorSharpIcon from "@mui/icons-material/BorderColorSharp";
import RocketOutlinedIcon from "@mui/icons-material/RocketOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useRouter } from "next/router";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
}));

const Sidebar = styled("div")(({ theme }) => ({
  backgroundColor: "black",
  color: theme.palette.primary.contrastText,
  borderRadius: 8,
  padding: theme.spacing(2),
  marginLeft: theme.spacing(2),
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  height: "80vh",
  position: "sticky",
  top: 0,
}));

const Content = styled("div")(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(3),
  fontFamily: "Roboto, sans-serif",
}));

interface DashboardLayoutProps {
  children: ReactNode;
}



const DashboardLayouts: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const opens = Boolean(anchorEl);
  const router = useRouter();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isSmallScreen = useMediaQuery((theme: any) =>
    theme.breakpoints.down("sm")
  );

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar
        sx={{
          fontFamily: "Roboto, sans-serif",
          backgroundColor: "white",
        }}
      >
        <Toolbar className="toolbar">
          <IconButton
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            paddingLeft={4}
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <p className="font-typograhica text-black">
              Prep<span className="text-purple-600">X</span>
            </p>
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
             onClick={()=>{router.push("")}}
            >
              <p className="text-black">Home</p>
            </Button>
            <Button
             onClick={()=>{router.push("finance")}}
            >
              <p className="text-black">Finance</p>
            </Button>
            <Button>
              <p className="text-black">Message</p>
            </Button>
            <Button>
              <p className="text-black"> Notification</p>
            </Button>

            <Avatar sx={{ bgcolor: deepOrange[500] }}>M</Avatar>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Button onClick={handleClick}>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>M</Avatar>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={opens}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Home</MenuItem>
              <MenuItem onClick={handleClose}>Finance</MenuItem>
              <MenuItem onClick={handleClose}>Message</MenuItem>
              <MenuItem onClick={handleClose}>Notification</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Toolbar></Toolbar>
      <Container sx={{ mt: 2 }}>
        {open && (
          <Sidebar className={open ? "open" : ""}>
            <List sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
    <ListItemButton onClick={()=>router.push("home")} sx={{ flexGrow: 1 }}>
      
      <HomeOutlinedIcon fontSize="large" />
    </ListItemButton>
    <ListItem button sx={{ flexGrow: 1 }}>
      <HelpOutlineIcon fontSize="large" />
    </ListItem>
    <ListItem button sx={{ flexGrow: 1 }}>
      <RocketOutlinedIcon fontSize="large" />
    </ListItem>
    <ListItemButton  sx={{ flexGrow: 1 }}>
      <HeadsetMicOutlinedIcon fontSize="large" />
    </ListItemButton>
    <ListItemButton onClick={()=>router.push("CreateNote")}  sx={{ flexGrow: 1 }}>
      <BorderColorSharpIcon fontSize="large" />
    </ListItemButton>
  </List>
          </Sidebar>
        )}
        <Content>
          {/* Main content goes here */}

          {children}
        </Content>
      </Container>
    </>
  );
};

export default DashboardLayouts;
