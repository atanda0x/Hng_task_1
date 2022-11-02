const express = require('express')
const dotenv = require('dotenv')

dotenv.config();

const port = process.env.PORT || 5000

const app = express();

app.get('/', (req, res)=>{
    res.json({
        "slackUsername":"atanda0x",
        "backend":true,
        "age":20,
        "bio":'backend engineer'
    })
})


app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})