const express = require("express");
const app = express();
const path = require("path");
// const instaData = require("./data.json")

const port = 8080;
//app.use(express.static(path.join(__dirname,"public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    res.render("home.ejs");
})
app.get("/rolldice",(req,res)=>{
    let num = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceval : num});
});
app.listen(port,()=>{
    console.log(`App Listening to ${port}`);
});