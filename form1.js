var express=require('express');
var app=express();
app.get('/index1.html',function(req,res){
    res.sendFile(__dirname +"/"+"index1.html");
})
app.get('/get_example2',function(req,res){
    res.send('<p>Firstname:'+req.query['firstname']+'</p> <p>Lastname:'+req.query['lastname']+'</p><p>Password: '+req.query['password']+
        '</p><p>AboutYou: '+req.query['aboutyou']+ '</p>');
})
var server=app.listen(8000,function(){
    
})