import { Route, Routes } from "react-router-dom";
import Main from "./components/User/Main";
import Signup from "./components/User/Singup";
import Login from "./components/User/Login";
import LoginA from "./components/Admin/LoginA";
import MainA from "./components/Admin/MainA";
import Contact from "./components/contact";
import Home from "./components/landingsite/home";
import Header from "./components/Header/header";
import Fake from "./components/fake";
import Profile from "./components/User/profile/profile";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BloodA from "./components/User/Main/BloodA/BloodA";
import Book from "./components/User/Main/Donation/book";
import Success from "./components/User/Main/Donation/success";
function App() {
  const user = localStorage.getItem("token");
  const admin = localStorage.getItem("tokens");

  return (
    <>
      <Routes>
        <Route path="/home" exact element={<Main />} />
        <Route path="/admin" exact element={<MainA />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/blood" exact element={<BloodA/>} />
        <Route path="/donate" exact element={<Book/>} />
        <Route path="/s" exact element={<Success/>} />
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/logina" exact element={<LoginA />} />
          <Route path="/fake" exact element={<Fake />} />
         
        </Route>
      </Routes>
    </>
  );
}

export default App;
