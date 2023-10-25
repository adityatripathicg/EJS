const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));

app.get("/", (req,res)=>{
    res.render("home.ejs");
});
app.get("/rolldice", (req,res)=>{
    let diceval = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceval});
});

app.get("/ig/:username", (req,res)=>{
    const followers = ["SCG","chotu","Sirisha"]
    let { username } = req.params;
    console.log(username);
    res.render("insta.ejs",{username, followers});
});

app.get("/hi", (req,res)=>{
    res.send("CG");
});
app.listen(port, ()=>{
    console.log("Listening on port :",port);
});