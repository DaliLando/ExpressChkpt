const timeLog = (req,res,next)=> {
    let date = new Date();
    let h= date.getHours();
    let day= date.getDay();
    if ((day > 5) || (h<9)||(h>17)){
        res.end("We are open Mon to Thur from 9h to 17h")
    } else {
    next()

    }
    
}
module.exports = timeLog;