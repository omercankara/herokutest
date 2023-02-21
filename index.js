import express from "express"
const app = express()
/* app.use(express.json())
import cors from "cors"
app.use(cors())

import bodyParser from "body-parser"
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); */


app.get("/", (req, res) => {
    res.send("get")
})


app.listen(process.env.PORT || 5000, () => {
    console.log("test")
})