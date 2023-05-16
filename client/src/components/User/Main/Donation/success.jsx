import React from 'react'
import './Donation.css';
import './book.jsx';
import { v4 as uuid } from 'uuid';
import {useNavigate, useLocation } from 'react-router-dom';
import {Link } from "react-router-dom";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
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
const Success=() => {
  const location = useLocation();
  console.log(location);
    //for logouot
    const navigate = useNavigate();
    const t = localStorage.getItem("token");
   if (!t) {
    navigate("/");
  }
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };


    const unique_id = uuid();
  const small_id = unique_id.slice(0,8)
  return (
    <div>
    <Container>
    <Wrapper>
    <Left>
<Link to="/" style={{ textDecoration: "none" }}>
<Logo>RED DONOR</Logo>
</Link>
</Left>
<Right>

<Link
  to="/donate"
  style={{ color: "white", textDecoration: "none" }}
>
  <Button
    style={{ fontSize: "20px", marginRight: "20px" , color: "white" }}
    color="primary"
    variant="contained"
  >
  Donate Now
  </Button>
</Link>
<Link
  to="/blood"
  style={{ color: "white", textDecoration: "none" }}
>
  <Button
    style={{ fontSize: "20px" ,color: "white"}}
    color="primary"
    variant="contained"
  >
    Check Blood Availability
  </Button>
</Link>
<Button style={{ fontSize: "20px" ,color: "white"}}
    color="primary"
    variant="contained" onClick={handleLogout}>
      Logout
    </Button>
</Right>
</Wrapper>
</Container><br/><br/>
    <div className='center'>
        <h1 className="head2">Appointment Booked</h1>
      <p><b>Appointment ID :</b>{small_id}</p>
        <p><b>Name:</b>{location.state.data.firstName + " " +location.state.data.lastName}</p>
        <p><b>Age :</b>{location.state.data.age}</p>
        <p><b>Phone Number :</b> {location.state.data.number}</p>
        <p><b>Blood Group :</b>{location.state.data.blood}</p>
        <p><b>Slot :</b>{location.state.data.time}</p>
        <p><b>Date :</b>{location.state.data.Day+"/"+location.state.data.Month+"/"+location.state.data.Year}</p>
        <p><b>City:</b>{location.state.data.City}</p>
        <p><b>State:</b>{location.state.data.State}</p>
        
    </div>
    </div>
  )
}

export default Success