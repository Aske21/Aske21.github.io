import styled from "styled-components";
interface MenuProps {
  isOpen: boolean;
}

export const NavigationWrapper = styled.div`
  width: 100%;
  margin-inline-start: auto;
  margin-inline-end: auto;
  max-width: 800px;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 8px;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #232634;
  padding: 10px 20px;
  position: relative;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Logo = styled.div`
  color: ${(props) => props.theme.colors.text};
`;

export const LogoIcon = styled.div`
  font-size: 32px;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 8px;
`;

export const MenuButton = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;

    div {
      width: 25px;
      height: 3px;
      background-color: white;
      margin: 4px 0;
    }
  }
`;

export const Menu = styled.ul<MenuProps>`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 16px;
    font-size: 28px;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: ${({ isOpen }) => (isOpen ? "0" : "-110vw")};
    background-color: #232634;
    transition: right 0.3s ease-in-out;
    width: 100vw;
    padding: 20px;
    height: 100vh;
    box-shadow: -5px 0px 10px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
`;

export const MenuItem = styled.li`
  margin-right: 20px;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #f8bbd0;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const DarkModeToggle = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
