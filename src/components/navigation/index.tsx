import React, { useState } from "react";
import {
  Nav,
  Logo,
  MenuButton,
  Menu,
  MenuItem,
  NavigationWrapper,
  Avatar,
  StyledImage,
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
            <div>
              <StyledImage
                src="https://avatars.githubusercontent.com/u/47534735?s=400&u=fa878ac2ddd4f092096a03f9ee7b5715c2504fcc&v=4"
                alt="Avatar image"
              />
            </div>
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
