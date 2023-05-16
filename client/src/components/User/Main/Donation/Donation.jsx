import React from 'react'
import {Link } from "react-router-dom";
import './Donation.css';
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Calendar from 'react-calendar';
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

const Donation = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {navigate("/s")}
    const navigate = useNavigate();
    const [s, sets] = useState(null);
  const [c, setc] = useState(null);
  const [b, setb] = useState(null);
    const t = localStorage.getItem("token");
  
  if (!t) {
    navigate("/");
  }
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const states = [
    { id: "Delhi", name: "Delhi" },
    { id: "Maharashtra", name: "Maharashtra" },
    { id: "Uttar Pradesh", name: "Uttar Pradesh" },
    { id: "Haryana", name: "Haryana" },
    { id: "Punjab", name: "Punjab" }, 
    { id: "Himachal Pradesh", name: "Himachal Pradesh" }, 
    { id: "Uttarakhand", name: "Uttarakhand" },
    { id: "Jammu and Kashmir", name: "Jammu and Kashmir" },
  ];
  const cities = [
    { id: "New Delhi", stateId: "Delhi", name: "New Delhi" },
    { id: "old Delhi", stateId: "Delhi", name: "old Delhi" },
    { id: "Mumbai", stateId: "Maharashtra", name: "Mumbai" },
    { id: "Pune", stateId: "Maharashtra", name: "Pune" },
    { id: "Gurugram", stateId: "Haryana", name: "Gurugram" },
    { id: "Faridabad", stateId: "Haryana", name: "Faridabad" },
    { id: "Panipat", stateId: "Haryana", name: "Panipat" },
    { id: "Lucknow", stateId: "Uttar Pradesh", name: "Lucknow" },
    { id: "Kanpur", stateId: "Uttar Pradesh", name: "Kanpur" },
    { id: "Noida", stateId: "Uttar Pradesh", name: "Noida" },
    { id: "Jaipur", stateId: "Rajasthan", name: "Jaipur" },
    { id: "Jodhpur", stateId: "Rajasthan", name: "Jodhpur" },
    { id: "Udaipur", stateId: "Rajasthan", name: "Udaipur" },
    { id: "Shimla", stateId: "Himachal Pradesh", name: "Shimla" },
    { id: "Manali", stateId: "Himachal Pradesh", name: "Manali" },
    { id: "DharamShala", stateId: "Himachal Pradesh", name: "Dharamshala" },
    { id: "Dehradun", stateId: "Uttarakhand", name: "Dehradun" },
    { id: "Nainital", stateId: "Uttarakhand", name: "Nainital" },
    { id: "Haridwar", stateId: "Uttarakhand", name: "Haridwar" },
    { id: "Jammu", stateId: "Jammu and Kashmir", name: "Jammu" },
    { id: "Srinagar", stateId: "Jammu and Kashmir", name: "Srinagar" },
    { id: "Baramulla", stateId: "Jammu and Kashmir", name: "Baramulla" },
    { id: "Amritsar", stateId: "Punjab", name: "Amritsar" },
    { id: "Ludhiana", stateId: "Punjab", name: "Ludhiana" },
    { id: "Jalandhar", stateId: "Punjab", name: "Jalandhar" },
  ];
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  useEffect(() => {
    setState(states);
  }, []);

  const handleState = (id) => {
    const dt = cities.filter((x) => x.stateId === id);
    setCity(dt);
  };
  const [value, onChange] = useState(new Date());
  return(
    <div> <Container>
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
        <h1 className="head2">Book Your Appointment</h1>
<div className="checkout">
<form onSubmit={handleSubmit(onSubmit)}>
        <div className="name">
          <input
            className="input fr"
            placeholder="First Name"
            type="text"
            name="firstname"
            {...register("First Name", { required: true })}
            //value={text.firstname}
            //onChange={handleChange}
          />
          {errors.text && <span>{errors.text.message}</span>}
          <input
            className="input"
            placeholder="Last Name"
            type="text"
            name="lastname"
            {...register("Last Name", { required: true })}
            //value={text.lastname}
           // onChange={handleChange}
          />
        </div>
        <input
          className="input"
          placeholder="Email"
          type="email"
          name="email"
          {...register("Email", { required: true })}
          //value={text.email}
          //onChange={handleChange}
        />
         <select
          id="bloodgrp" className="bloodgrp  "
          {...register("Bloodgrp", { required:'Blood Group is required' })}
          onChange={(e) => setb(e.target.value)}
         
        >
          <option value="null">Select Blood Grp+</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
        <br />
        <select
          id="State"
          classname="form-control select-class"
          {...register("State", { required: 'State is required' })}
          onChange={(e) => {
            handleState(e.target.value);
            sets(e.target.value);
          }}
        >
          <option value="null">Select State</option>
          {state && state !== undefined
            ? state.map((ctr, index) => {
                return (
                  <option key={index} value={ctr.id}>
                    {ctr.name}
                  </option>
                );
              })
            : "No State"}
        </select>
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <select
          id="City"
          onChange={(e) => setc(e.target.value)}
          classname="form-control select-class"
          {...register("City", { required:'City is required' })}
        >
          <option value="null">Select City</option>
          {city && city !== undefined
            ? city.map((ctr, index) => {
                return (
                  <option key={index} value={ctr.id}>
                    {ctr.name}
                  </option>
                );
              })
            : "No City"}
        </select>
        <br />
        <br />
        <Calendar onChange={onChange} value={value} /> <br/><br/><br/>
       
        <select
          id="time" className="bloodgrp form-control  "
          {...register("time", { required: 'Time is required'})}
          onChange={(e) => setb(e.target.value)}
         
        >
          <option value="null">Select Time Slot</option>
          <option value="1">10:00 A.M - 12:00 P.M</option>
          <option value="2">12:00 P.M - 2:00 P.M</option>
          <option value="3">2:00 P.M - 4:00 P.M</option>
          <option value="4">4:00 P.M - 6:00 P.M</option>
                 </select>
        <br />

        <button className="btn-sub" >
          Submit
        </button>
        </form>
      </div>
    </div>
  )
}
export default Donation