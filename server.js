const express = require ("express");
const {router} = require("./routes/route");
const timeLog = require("./middlware/middle");
const app = express();
const port =4000;
const path = require("path")

app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static(path.join(__dirname,"Public")))
app.use(timeLog)
app.use("/main",router)
// app.get('/user/:id',(req,res)=>{
//     res.status(200)
//     let {id}=req.params
//     res.set('Content-type', 'text/html');
//   res.send('<html><body>' +
//   '<h1>Hello ' + id+ '</h1>' +'</body></html>')
// });




app.listen(port,(err,)=> {
    if (err) {
        console.error(err);
    } else {
        console.log(` server run in port: ${port}`);
    }
})