var express=require('express');
var app=express();
app.use(express.static('public'));
app.get('/index.html',function(req,res){
    res.sendFile(__dirname +"/"+"index.html");
})
app.get('/process_get',function(req,res){
    response={
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})
var server=app.listen(5000,function(){
    
    console.log("Example app listening at http://127.0.0.1:5000")
});