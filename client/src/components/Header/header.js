import React from "react";
import Button from "react-bootstrap/Button";
import "./header.css";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import {Link } from "react-router-dom";
const Container = styled.div`
  background-color: black;
  color: white;
  height: 80px;
  padding-top: 10px;
`;

const Wrapper = styled.div`
  padding: 10px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: white;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  return (
    <>
      <Container>
        <Wrapper>
        <Left>
<Link to="/" style={{ textDecoration: "none" }}>
  <Logo>RED DONOR</Logo>
</Link>
</Left>
<Right>

<Link
      to="/login"
      style={{ color: "white", textDecoration: "none" }}
    >
      <Button
        style={{ fontSize: "20px", marginRight: "20px" , color: "white" }}
        color="primary"
        variant="contained"
      >
       Sign In
      </Button>
    </Link>
    <Link
      to="/signup"
      style={{ color: "white", textDecoration: "none" }}
    >
      <Button
        style={{ fontSize: "20px" ,color: "white"}}
        color="primary"
        variant="contained"
      >
        Register
      </Button>
    </Link>
    <Link
      to="/logina"
      style={{ color: "black", textDecoration: "none" }}
    >
      <Button
        style={{ fontSize: "20px" , color: "white"}}
        color="primary"
        variant="contained"
      >
        Admin 
      </Button>
    </Link>
</Right>
</Wrapper>
</Container>
      <Outlet />
    </>
  );
}

export default Header;
