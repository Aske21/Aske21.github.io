import React, { useState } from "react";
import {
  Nav,
  Logo,
  MenuButton,
  Menu,
  MenuItem,
  NavigationWrapper,
  Avatar,
  LogoIcon,
} from "./style";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navigateHome = () => {
    window.location.replace("/");
  };

  return (
    <NavigationWrapper>
      <Nav>
        <Logo>
          <Avatar onClick={() => navigateHome()}>
            <LogoIcon>🌸</LogoIcon>
            <div>Asim Veledarevic</div>
          </Avatar>
        </Logo>
        <MenuButton onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </MenuButton>
        <Menu isOpen={isMenuOpen}>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Services</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
      </Nav>
    </NavigationWrapper>
  );
};

export default Navigation;
