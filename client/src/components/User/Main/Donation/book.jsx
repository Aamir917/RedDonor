import React from 'react'
import { useForm } from "react-hook-form";
import {useNavigate } from 'react-router-dom';
import {Link } from "react-router-dom";
import './Donation.css';
import { useState ,useEffect } from "react";
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
 const Book =() =>{
    //for logouot
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

//for form
const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
  navigate("/s",{state:{data}});
  };  
  //for state and city
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
  //for calendar
  
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
<h1 className="head2">Book Your Appointment</h1>
<div className='checkout'>
<form onSubmit={handleSubmit(onSubmit)}>
      <label><b>Enter First Name</b> </label>
      <input
    className="input fr"
      type="text"
      name="firstname"
        {...register("firstName", {
          required: true,
          maxLength: 10,
          pattern: /^[A-Za-z]+$/i
        })}
      />
      {errors?.firstName?.type === "required" && <p style={{color: "red"}}>FirstName is required</p>}
      {errors?.firstName?.type === "maxLength" && (
        <p style={{color: "red"}}>First name cannot exceed 10 characters</p>
      )}
      {errors?.firstName?.type === "pattern" && (
        <p style={{color: "red"}}>Alphabetical characters only</p>
      )}
      <label><b>Enter Last Name</b></label>
      <input
       className="input"
      type="text"
       name="lastname" {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })} />
      {errors?.lastName?.type === "required" && <p style={{color: "red"}}>Last Name is required</p>}
      {errors?.lastName?.type === "pattern" && (
        <p style={{color: "red"}}>Alphabetical characters only</p>
      )}
      <label><b>Enter Age</b> </label>
      <input 
       className="input fr"
       type="number"
       name="age"{...register("age", { required: true, min: 18, max: 50 })} />
        {errors?.age?.type === "required" && <p style={{color: "red"}}>Age is required</p>}
      {errors.age && (
        <p style={{color: "red"}}>You Must be older then 18 and younger then 50 years old</p>
      )}
      <label><b>Enter Phone Number:</b> </label>
      <input 
       className="input fr"
       type="text"
       name="number"{...register("number", { required: true, maxLength:10,})} />
        {errors?.number?.type === "required" && <p style={{color: "red"}}>Phone Number  is required</p>}
        <label><b>Enter Blood Group</b></label>
        <select
        className="bloodgrp  "   
        type="select"
        name="blood"{...register("blood",{required : true})}>
            <option >Select</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          </select>
         <label><b>Enter State</b></label>
        <select
          className="bloodgrp  " 
          type="select"
          name="State"
          {...register("State", { required: 'State is required' })}
          onChange={(e) => {
            handleState(e.target.value);
            sets(e.target.value);
          }}
        >
          <option>Select</option>
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
        <label><b>Enter City</b></label>
        <select
          id="City"
          onChange={(e) => setc(e.target.value)}
          className="bloodgrp  " 
          type="select"
          name="City"
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
        <label><b>Enter Date</b></label><br/>
     <select 
     className="date"
     type="select"
     name="Day"
     placeholder="Select day"
     {...register("Day", { required: 'Day is required'})}>
    <option value="null">Select</option>
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
         <option value="6">6</option>
         <option value="7">7</option>
         <option value="8">8</option>
         <option value="9">9</option>
         <option value="10">10</option>
         <option value="11">11</option>
         <option value="12">12</option>
         <option value="13">13</option>
         <option value="14">14</option>
         <option value="15">15</option>
         <option value="16">16</option>
         <option value="17">17</option>
         <option value="18">18</option>
         <option value="19">19</option>
         <option value="20">20</option>
         <option value="21">21</option>
         <option value="22">22</option>
         <option value="23">23</option>
         <option value="24">24</option>
         <option value="25">25</option>
         <option value="26">26</option>
         <option value="27">27</option>
         <option value="28">28</option>
         <option value="29">29</option>
         <option value="30">30</option>
     </select>
     <select 
     className="date"
     type="select"
     name="Month"
     placeholder="Select Month"
     {...register("Month", { required: 'Month is required'})}>
    <option value="null">Select</option>
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
         <option value="6">6</option>
         <option value="7">7</option>
         <option value="8">8</option>
         <option value="9">9</option>
         <option value="10">10</option>
         <option value="11">11</option>
         <option value="12">12</option>
         </select>
         <select 
     className="date"
     type="select"
     name="Year"
     placeholder="Select Year"
     {...register("Year", { required: 'Year is required'})}>
    <option value="null">Select</option>
         <option value="2023">2023</option>
         </select><br/>
        <label><b>Enter Time Slot</b></label>
       <select
         id="time" className="bloodgrp  " 
         type="select"
         {...register("time", { required: 'Time is required'})}
         onChange={(e) => setb(e.target.value)}
        
       >
         <option value="null">Select Time Slot</option>
         <option value="1">10:00 A.M - 12:00 P.M</option>
         <option value="2">12:00 P.M - 2:00 P.M</option>
         <option value="3">2:00 P.M - 4:00 P.M</option>
         <option value="4">4:00 P.M - 6:00 P.M</option>
                </select>
      <input type="submit" className="white" />
    </form>
</div>
    </div>
     )
}

export default Book