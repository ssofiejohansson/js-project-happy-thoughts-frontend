import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
  width: 700px;
  margin: 30px auto 30px auto;
  background: #f48fb1;

  box-shadow: 0 4px 0 #f4511e;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  border-radius: 24px;
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
  color: #222; // white text
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  padding: 6px 16px;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  &:hover,
  &:focus {
    background: #f4511e;
  }
`;

export const Nav = () => {
  return (
    <NavBar>
      <NavList>
        <NavItem>
          <StyledLink to='/'>Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to='/login'>Login</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to='/logout'>Log out</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to='/register'>Sign up</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to='/thoughts'>Post</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to='/MyLikes'>My Likes</StyledLink>
        </NavItem>
      </NavList>
    </NavBar>
  );
};
