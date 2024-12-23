// var http = require('http');

// const server = http.createServer((req,res)=>{
//    if(req.url =="/about"){
//     res.end("About page");
//    }
//    if(req.url =="/profile"){
//     res.end("Profile page");
//    }
// });

// server.listen(3000);


// using express way

const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/about',(req,res)=>{
    res.send("About Page");
})

app.get('/profile',(req,res)=>{
    res.send("Profile Page");
})
app.listen(3000);