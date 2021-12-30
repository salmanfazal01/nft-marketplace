import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LogoDark from "../assets/images/logo/logo_dark.png";
import LogoLight from "../assets/images/logo/logo_light.png";

const config = ({ mode }) => ({
  appName: "Axies",
  Logo: mode === "dark" ? LogoDark : LogoLight,
  LogoInverse: mode === "dark" ? LogoLight : LogoDark,
  menuItems: [
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
  ],
});

export default config;
