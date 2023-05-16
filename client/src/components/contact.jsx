import React from "react";
import "./contact.css";

const Contact=() => {
  return (
  <div className="style">
  <h1 style="color:red; font-size:50px;text-align:center"> <span className="bolded">+ Emergency Form</span></h1>
   <section className="vh-100">
  <div className="container py-5 h-100">
      <div className="row d-flex align-items-center justify-content-center h-100">
        <div className="col-md-8 col-lg-7 col-xl-6">
          <img src=""
            className="img-fluid" alt="Phone image"width=" 1250" height="1250" />
        </div>
        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
   
   <h2 style="font-size: 50px;">Fill the Details</h2>
   
    <div className="container">
      <div className="col-lg-12">
        <div className="col-lg-6">
          <form>
            <table width="100%">
              <tbody>
                <tr>
                  <td>
                    First Name
                    <label>*</label>
                    <br/>
                    <input type="text" name="fname" id="fname" className=""/>
                  </td>
                </tr>
                <tr>
                    <td>
                      Last Name
                      <label>*</label>
                      <br/>
                      <input type="text" name="lname" id="lname" className=""/>
                    </td>
                  </tr>
                <tr>
                  <td>
                    Email Address
                    <label>*</label>
                    <br/>
                    <input type="text" name="email" id="email" className=""/>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </form>
        </div>
        <div className="col-lg-6 details">
          <form>
            <table width="100%">
              <tbody>
                
                <tr>
                  <td>
                    Mobile No.
                    <label>*</label>
                    <br/>
  
                    <input type="text" name="phone" id="phone"/>
                  </td>
                </tr>
                <tr>
                  <td>
                    Blood GRP
                    <label>*</label>
                    <br/>
                    <select id="uexperience" className="decorated">
                      <option id="selectHeader">--------- Select Blood Grp --------------</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-"> AB-</option>
                      <option value="O+"> O+</option>
                      <option value="O-"> O-</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                   Unit needed
                    <label>*</label>
                    <br/>
                    <input type="text" name="fname" id="fname" className=""/>
                  </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                  <td>
                   State
                    <label>*</label>
                    <br/>
                    <select name="state" style="width: 500px">
                    <option id="selectHeader"> Select State</option>
                       
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                        </select>
                  </td>
                </tr>
                <tr>
                    <td>
                     House/Flat Number
                      <label>*</label>
                      <br/>
    
                      <input type="text" name="phone" id="hno"/>
                    </td>
                  </tr>
              
                <tr>
                    <td>
                      Sector/Block/Building
                      <label>*</label>
                      <br/>
    
                      <input type="text" name="phone" id="sector"/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                     Area
                      <label>*</label>
                      <br/>
    
                      <input type="text" name="phone" id="other"/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                     Pin code
                      <label>*</label>
                      <br/>
    
                      <input type="text" name="phone" id="code"/>
                    </td>
                  </tr>
                  
              </tbody>
            </table>
          </form>
        </div>
      </div><br/>
      <input type="submit" value="Submit" />
    </div>
  </div>
</div>
</div>

  </section>
  </div>
 )
}

export default Contact

    