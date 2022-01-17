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
    { name: "Home", link: "/" },
    { name: "Explore", link: "/explore" },
    { name: "Item", link: "/nft/item" },
    { name: "Create", link: "/nft/create" },
    { name: "Profile", link: "/profile/edit" },
    // { name: "Contact", link: "/explore" },
  ],
});

export default config;
