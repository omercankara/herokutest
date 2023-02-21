const express = require("express")
const app = express()
var cors = require('cors')
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Guncel")
})


app.listen(process.env.PORT || 5000, () => {
    console.log("test")
})