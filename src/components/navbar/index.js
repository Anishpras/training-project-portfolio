import React from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import styled from "styled-components";
import tw from "twin.macro";
import LogoImage from "../../assets/logo.svg";

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#fff",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};
const NavContainer = styled.div`
  ${tw`
 
  justify-around
  items-center
  flex
    w-1/2
    h-24
`};
`;

const Logo = styled.img``;

const NavLinkComponent = styled.h3`
  ${tw`
text-white
text-3xl
`};
`;

export const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: "640px" });

  if (isMobile) {
    return (
      <>
        <NavLink to="/">
          <Logo src={LogoImage} />
        </NavLink>
        <Menu right styles={styles}>
          <NavLink to="/blogs">
            <NavLinkComponent>Blogs</NavLinkComponent>
          </NavLink>
          <NavLink to="/about">
            <NavLinkComponent>About</NavLinkComponent>
          </NavLink>
          <NavLink to="/contact">
            <NavLinkComponent>Contact me</NavLinkComponent>
          </NavLink>
        </Menu>
      </>
    );
  }
  return (
    <>
      <NavContainer>
        <NavLink to="/">
          <Logo src={LogoImage} />
        </NavLink>

        <NavLink to="/blogs">
          <NavLinkComponent>Blogs</NavLinkComponent>
        </NavLink>
        <NavLink to="/about">
          <NavLinkComponent>About</NavLinkComponent>
        </NavLink>
        <NavLink to="/contact">
          <NavLinkComponent>Contact me</NavLinkComponent>
        </NavLink>
      </NavContainer>
    </>
  );
};
