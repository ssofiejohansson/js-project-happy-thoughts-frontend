import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
  width: 100%;
  margin: 0;
  background: #f2f0f0;
  border-bottom: 2px solid #000;
  box-shadow: 0 4px 0 #000;
  padding: 10px 0;
  margin-bottom: 30px;
`;

const NavList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0 30px;
  align-items: center;
`;

const NavItem = styled.li`
  font-family: monospace;
  font-weight: 500;
  font-size: 16px;
`;

const StyledLink = styled(Link)`
  color: #222;
  text-decoration: none; 
  padding: 6px 16px;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  &:hover, &:focus {
  
    color: #e63946;

  }
`;

export const Nav = () => {
  return (
    <NavBar>
      <NavList>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/login">Log in</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/register">Register</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/thoughts">See all thoughts</StyledLink>
        </NavItem>
      </NavList>
    </NavBar>
  );
};