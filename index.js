const express = require("express")
const app = express()
var cors = require('cors')
app.use(cors())
bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Body test")
})


app.listen(process.env.PORT || 5000, () => {
    console.log("test")
})