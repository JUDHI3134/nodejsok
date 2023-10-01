function agedector(req,res,next){
if(req.query >= 18){
    res.send("U are great you can access this site");
}else{
    res.send("U can not access")
}
}
module.exports = agedector;