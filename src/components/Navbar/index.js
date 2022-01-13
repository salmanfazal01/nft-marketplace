import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Container,
  Divider,
  Hidden,
  Link,
  Stack,
  useTheme,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { NAVBAR_HEIGHT_DESKTOP, NAVBAR_HEIGHT_MOBILE } from "../../constants";
import withAppConfig from "../../hoc/withAppConfig";
import RoundedButton from "../Buttons/RoundedButton";
import ThemeToggleButton from "../Buttons/ThemeToggle";

const menuItems = [
  { name: "Home", link: "/" },
  { name: "Explore", link: "/explore" },
  { name: "Activity", link: "/explore" },
  { name: "Community", link: "/explore" },
  { name: "Contact", link: "/explore" },
];

const Navbar = ({ appConfig }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const { projectName, LogoDark, LogoWhite } = appConfig;

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Container maxWidth="xl">
          <Stack
            spacing={1}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              height: NAVBAR_HEIGHT_MOBILE,
              [theme.breakpoints.up("md")]: {
                height: NAVBAR_HEIGHT_DESKTOP,
              },
            }}
          >
            {/* Logo */}
            <Button sx={{ textTransform: "inherit" }}>
              <img
                src={isDark ? LogoDark : LogoWhite}
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
                    <Link href={item.link} underline="none" key={i}>
                      <Button
                        disableElevation
                        size="large"
                        sx={{
                          textTransform: "inherit",
                          fontWeight: 500,
                          color: theme.palette.primary.white,
                        }}
                      >
                        <Typography sx={{ fontWeight: 500 }}>
                          {item.name}
                        </Typography>
                      </Button>
                    </Link>
                  ))}

                  <RoundedButton
                    icon={<AccountBalanceWalletIcon fontSize="small" />}
                    variant="navbar"
                  >
                    Wallet Connect
                  </RoundedButton>

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
