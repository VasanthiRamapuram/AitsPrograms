fs=require("fs");
fs.readFile('xy.txt',function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());
});
console.log("Program Ended");