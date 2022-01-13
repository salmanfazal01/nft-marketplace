import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LogoDark from "../assets/images/logos/logo_dark.png";
import LogoLight from "../assets/images/logos/logo_light.png";
import LogoWhite from "../assets/images/logos/logo_white.png";

const config = ({ mode }) => ({
  appName: "Axies",
  Logo: mode === "dark" ? LogoDark : LogoLight,
  LogoLight: LogoLight,
  LogoDark: LogoDark,
  LogoWhite: LogoWhite,
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
