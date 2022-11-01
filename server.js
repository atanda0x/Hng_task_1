const express = require("express");
var app = express();


app.get('/', (req, res) => {
    res.send(
    { slackUsername: "atanda0x", 
    backend: true,
    age: 20, 
    bio: "I'm tall, dark and god look" })
});

app.listen(3000)