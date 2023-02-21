import express from "express"
const app = express()



var cors = require("cors")
app.use(cors())
bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

app.get("/", (req, res) => {
    res.send("get")
})

app.listen(process.env.PORT || 5000)