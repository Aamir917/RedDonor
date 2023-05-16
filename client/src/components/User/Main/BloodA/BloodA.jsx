import "./BloodA.css";
import "../../../Admin/Lists/User.css";
// import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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


const Main = () => {
  const navigate = useNavigate();
  const [blood, setblood] = useState();
  const [load, setload] = useState(false);
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

  const blooda = () => {
    setload(true);
    fetch(`http://localhost:5000/blood/find/${s}/${c}/${b}`, {
      method: "GET",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res2) => {
        if (res2.data) {
          // console.error("userdata", res2.data);
          setblood(res2.data);
        } else {
          setblood("");
          alert(res2.error);
        }
        setload(false);
      });
  };
return (
    <div className="main_container">
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
      Donate Now
      </Button>
    </Link>
    <Link
      to="/"
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
</Container>
        
   
      <div className="div-12"><br/><br/><br/>
        <h1 className="bold">Welcome Back&nbsp;{t}</h1><br/><br/>
        <h2> Check Blood Availability</h2> <br />
        <br />
        <select
          id="bbstates"
          classname="form-control select-class"
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
        <br />
        <br />
        <select
          id="bbcities"
          onChange={(e) => setc(e.target.value)}
          classname="form-control select-class"
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
        <select
          id="bloodgrp"
          onChange={(e) => setb(e.target.value)}
          className="form-control select-class"
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
        <button onClick={blooda}> Show</button>
        <br />
        <br />
        {load
          ? "loading..."
          : blood && (
              <>
                <h1 className="text-center bg-dark text-light p-2">
                  All blood bank
                </h1>
                <table>
                  <tr>
                    <th>Blood Bank Name</th>
                    <th>Blood Group</th>
                    <th>Available Unit</th>
                    <th>Phone </th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip </th>
                  </tr>
                  {blood.map((a) => (
                    <>
                      <tr>
                        <td>{a.name}</td>
                        <td>{a.blood_type}</td>
                        <td>{a.unit_available}</td>
                        <td>{a.phone_number} </td>
                        <td>{a.address}</td>
                        <td>{a.city}</td>
                        <td>{a.state}</td>
                        <td>{a.zip} </td>
                      </tr>
                    </>
                  ))}
                </table>
              </>
            )}
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    </div>
  );
};

export default Main;
