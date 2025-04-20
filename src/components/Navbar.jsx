import React, { useState } from "react";
import { Link, Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/logo.svg";

const navItems = [
  { text: "Home", to: "/" },
  { text: "Purchase", to: "/pre-purchase" },
  { text: "FAQs", to: "/faqs" },
  { text: "Contact Us", to: "/contact-us" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <div className="flex justify-center items-center mt-4">
        <img src={Logo} alt="Logo" style={{ height: "30px" }} />
      </div>
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={RouterLink}
            to={item.to}
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <Button
          component={RouterLink}
          to="/login"
          variant="contained"
          color="primary"
        >
          Login
        </Button>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo + Title */}
          <Box display="flex" alignItems="center" gap={1}>
            <img src={Logo} alt="Logo" style={{ height: "30px" }} />
            <span className="font-bold">BAKER'S BOT</span>
          </Box>

          {/* Desktop Nav */}
          {!isMobile && (
            <Box>
              {navItems.map((item) => (
                <Link
                  to={item.to}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  {item.text}
                </Link>
              ))}
              <Button
                component={RouterLink}
                to="/login"
                variant="contained"
                color="primary"
                sx={{ ml: 2 }}
              >
                Login
              </Button>
            </Box>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
