import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavItems = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => (
  <NavbarContainer>
    <Logo>ProductList</Logo>
    <NavItems>
      <NavItem href="#">Home</NavItem>
      <NavItem href="#">Products</NavItem>
      <NavItem href="#">Contact</NavItem>
    </NavItems>
  </NavbarContainer>
);

export default Navbar;
