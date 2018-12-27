const express = require('express')

const port = '192.168.43.233';

var app = express();
app.get("/",(req,res)=>{
	res.send("hello");	
})
app.use(express.static("/media/nikamanth/New Volume/movies"));

app.listen(8080,port);
