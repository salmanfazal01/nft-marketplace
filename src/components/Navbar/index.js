import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Container, Divider, Hidden, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import withAppConfig from "../../hoc/withAppConfig";
import ThemeToggleButton from "../Buttons/ThemeToggle";

const menuItems = [
  { name: "Home" },
  { name: "Explore" },
  { name: "Activity" },
  { name: "Community" },
  { name: "Contact" },
  {
    name: "Wallet Connect",
    variant: "outlined",
    icon: AccountBalanceWalletIcon,
  },
];

const Navbar = ({ appConfig }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { projectName, Logo } = appConfig;

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Container maxWidth="xl" sx={{ py: 1 }}>
          <Stack
            spacing={1}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Logo */}
            <Button sx={{ textTransform: "inherit" }}>
              <img
                src={Logo}
                alt={`${projectName} Logo`}
                style={{ maxHeight: 50, width: "100%", objectFit: "contain" }}
              />
            </Button>

            {/* Menu Items */}
            <Box>
              {/* Desktop Menu */}
              <Hidden mdDown>
                <Stack direction="row" spacing={2}>
                  {menuItems.map((item, i) => (
                    <Button
                      key={item.name}
                      disableElevation
                      variant={item.variant || "text"}
                      size="large"
                      sx={{
                        textTransform: "inherit",
                        fontWeight: 500,
                      }}
                    >
                      <Typography sx={{ fontWeight: 500 }}>
                        {item.name}
                      </Typography>
                    </Button>
                  ))}

                  <ThemeToggleButton />
                </Stack>
              </Hidden>

              {/* Mobile Menu */}
              <Hidden mdUp>
                <ThemeToggleButton />

                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  onClick={handleMenu}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {menuItems.map((item) => (
                    <MenuItem key={item.name}>{item.name}</MenuItem>
                  ))}
                </Menu>
              </Hidden>
            </Box>
          </Stack>
        </Container>
        <Divider />
      </AppBar>
    </Box>
  );
};

export default withAppConfig(Navbar);
