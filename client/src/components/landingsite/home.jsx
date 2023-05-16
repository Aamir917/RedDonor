import "./home.css";
import Button from 'react-bootstrap/Button';
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <div>
<br />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: 500 }}
            src="https://indiancc.mygov.in/wp-content/uploads/2021/08/mygov-9999999992095197695.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: 500 }}
            src="https://cdn.quotesgram.com/img/20/58/674564043-blood_what_is.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: 500 }}
            src="https://www.gyanipandit.com/wp-content/uploads/2015/05/Blood-Donation-Status-in-Hindi.gif"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <br />
      <br />
    <div className='flex-container ' >
       <div className='flex-box'><h1>WHY YOUR DONATION MATTERS</h1> 
       <p className='para'>
       One donation can save multiple lives. Here are the facts:<br/>
 
       -> Just 1 donation can save up to 3 lives. <br/>
       -> The average red blood cell transfusion is 3 pints (or 3 whole-blood donations).<br/> 
       -> More than 1 million people every year are diagnosed with cancer for the first time. Many of them will need blood—sometimes daily—during chemotherapy.<br/> 
       -> More than 38,000 blood donations are needed every day.<br/>
       -> Type O-negative whole blood can be transfused to people with any blood type, but this type of blood is rare, and supplies of it are low.<br/>
       -> Type AB plasma can be transfused to patients with all other blood types, but it's also in short supply.<br/></p></div>
       <div className='flex-box'><h1>BLOOD COMPATIBILITY</h1>
       <img src="https://www.hema-quebec.qc.ca/userfiles/image/photos/sang/anglais/Compatibilite-ang.jpg" className='img1'/><br/><br/>
       <Button variant="outline-danger"><a href="/login" className="hello">Donate Now</a></Button>
        </div>
      
       </div>
        </div>
  );
}

export default Home;
