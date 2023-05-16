import styles from "./styles.module.css";
import { Row, Col, Container, Button, ButtonGroup } from "react-bootstrap";
import Userlist from "../Lists/Userlist";
import Addbb from "../Lists/Addbb";
import BloodB from "../Lists/BloodB";
import Adminadd from "../Lists/Adminadd";
import Contact from "../Lists/Contact";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MainA = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("tokens");
    navigate("/");
  };
  const [a, seta] = useState(0);
//   addthis buttons in update<Button onClick={() => seta(5)}className="bg-light text-dark">Contact Form</Button>
  return (
    <div className={styles.maina_container}>
      <nav className={styles.navbar}>
        <h1>Red Donor</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <br />
      <br />
      <Container>
        <Row>
          <h1 className="text-center bg-black text-light p-2"> Admin Portal</h1>
          <Col md={2}>
            <ButtonGroup vertical style={{ minHeight: "500px" }}>
              <Button onClick={() => seta(1)} className="bg-light text-dark">All Users</Button>
              <Button onClick={() => seta(2)}className="bg-light text-dark">All Blood Banks</Button>
             
              <Button onClick={() => seta(3)}className="bg-light text-dark">Add New Blood Bank</Button>
              <Button onClick={() => seta(4)}className="bg-light text-dark">Add New Admin </Button>
            </ButtonGroup>
          </Col>
          <Col md={8}>
            {a === 1 && (
              <>
                <Userlist />
              </>
            )}
            {a === 2 && (
              <>
                <BloodB />
              </>
            )}
            {a === 3 && (
              <>
                <Addbb />
              </>
            )}
            {a === 4 && (
              <>
                <Adminadd />
              </>
            )}
            {a === 5 && (
              <>
                <Contact />
              </>
            )}
          </Col>
        </Row><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </Container>
    </div>
  );
};

export default MainA;
