"use client"
// import Link from 'next/link';

import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation'
 
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
 
const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff6347;
`;
 
const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;
 
const MenuItem = styled.li`
  cursor: pointer;
`;
 
const Header: React.FC = () => {

    const router = useRouter()
  return (
    <Nav>
      <Logo >DizMe</Logo>
      <Menu>
        <MenuItem  onClick={() => router.push('/')}>Home</MenuItem>
        <MenuItem >About</MenuItem>
        <MenuItem >Portfolio</MenuItem>
        <MenuItem >Service</MenuItem>
        <MenuItem onClick={() => router.push('/blog')}>Blog</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
    </Nav>
  );
};
 
export default Header;


