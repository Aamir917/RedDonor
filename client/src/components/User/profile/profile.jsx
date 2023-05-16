import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import "./profile.css";


const Profile = () => {
    const navigate = useNavigate();
    const t = localStorage.getItem("token");
  
  if (!t) {
    navigate("/");
  }
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
    
  return (
    <div className="main_container">
    <nav className="navbar">
        <h1>Red Donor</h1>
        
        <Dropdown>
      <Dropdown.Toggle variant="dark" className="btn">
      <div style={{color:"white",fontWeight:"700",width: "120px",height:"20px"}}>MY Profile</div>
      </Dropdown.Toggle>
<Dropdown.Menu>
      <Dropdown.Item href=""> <button className="white_btn" onClick={handleLogout}>
          Logout
        </button></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
</nav>

    <div className="container rounded bg-white mt-5 mb-5">
    <div className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img className="rounded-circle mt-5" width="150px" 
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
                <span className="font-weight-bold">{t}</span>
                <span> </span></div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels">Full Name</label>
                    <input type="text" className="form-control" placeholder="first name" value={t}/></div>
                    
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">Mobile Number</label>
                    <input type="text" className="form-control" placeholder="enter phone number" value=""/></div>
                    <div className="col-md-12"><label className="labels">Address Line 1</label>
                    <input type="text" className="form-control" placeholder="enter address line 1" value=""/></div>
                    <div className="col-md-12"><label className="labels">Address Line 2</label>
                    <input type="text" className="form-control" placeholder="enter address line 2" value=""/></div>
                    <div className="col-md-12"><label className="labels">Postcode</label>
                    <input type="text" className="form-control" placeholder="enter address line 2" value=""/></div>

                    <div className="col-md-12"><label className="labels">Area</label>
                    <input type="text" className="form-control" placeholder="enter address line 2" value=""/></div>
                    <div className="col-md-12"><label className="labels">Email ID</label>
                    <input type="text" className="form-control" placeholder="enter email id" value=""/></div>
                    <div className="col-md-12"><label className="labels">Blood Group</label>
                    <input type="text" className="form-control" placeholder="enter blood grp" value=""/></div>
                </div>
            <div className="row mt-3">
                    <div className="col-md-6"><label className="labels">State</label>
                    <input type="text" className="form-control" placeholder="state" value=""/></div>
                    <div className="col-md-6"><label className="labels">District</label>
                    <input type="text" className="form-control" value="" placeholder="district"/></div>
                </div>
                </div>
                <div className="mt-2 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
       
    </div>
</div>

  )
}

export default Profile