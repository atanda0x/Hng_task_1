const express = require("express");
const dotenv = require('dotenv')

dotenv.config();

const port = process.env.PORT || 5000

const app = express();




app.get('/', (req, res) => {
    res.send(
    { "slackUsername": "atanda0x", 
    "backend": true,
    "age": 20, 
    "bio": "I'm tall, dark and good looking" })
});

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})