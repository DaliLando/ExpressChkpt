const express = require("express");
const timeLog = require("../middlware/middle");

let router = express.Router();


router.get("/home", (req,res)=> {
    
    res.render("home")
})
router.get("/contact", (req,res)=> {
   
    res.render("contact")
})
router.get("/service", (req,res)=> {
   
    res.render("service")
})

// router.get('/',timeLog,(req,res)=>{
//     res.end('Arrived Early')
// });



module.exports = {router};