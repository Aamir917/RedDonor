import "./index1.css";
import "../../Admin/Lists/User.css";
// import Form from "react-bootstrap/Form";
import { useState } from "react";
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
</Container>
        
   
      <div className="div-12"><br/><br/><br/>
        <h1 className="bold">Welcome Back&nbsp;{t}</h1><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    </div>
  );
};

export default Main;
