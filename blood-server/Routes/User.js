const express = require("express");
const User = require("../DB/User");

const app = express();

app.post("/register", async (req, res) => {
  let fuser = await User.findOne({ email: req.body.email });
  if (fuser) {
    res.status(500).json({ error: "This email already exists" });
  } else {
    let user = new User(req.body);
    let result = await user.save();

    result = result.toObject();
    delete result.password;

    res.send(result);
  }
});

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.status(200).json({ user: user });
    } else {
      res.status(400).json({ message: "Invalied Email or Password" });
    }
  } else {
    res.status(403).json({ message: "Email and password required" });
  }
});

app.put("/update",async(req,res)=>{
  const user = await User.findById(req.user._id);
  if (user) {
    user.firstname = req.body.firstname || user.firstname;
    user.lastname = req.body.lastname || user.lastname;
    user.email = req.body.email || user.email;
   
    if(req.body.password){
      user.password = req.body.password;
    }
    const updatedUSer = await user.save();
     res.json({
      _id : updatedUSer._id,
      firstname : updatedUSer.firstname,
      lastname : updatedUSer.lastname,
      email : updatedUSer.email,
      token : generateToken(updatedUSer._id),
     });

  }
  else {
    res.status(404);
  }
});
app.get("/", async (req, res) => {
  const user = await User.find().sort({ $natural: -1 });
  res.json({ data: user });
});

module.exports = app;
