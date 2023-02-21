const express = require("express")
const app = express()
var cors = require('cors')
app.use(cors())
bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())


const db = require("./data/db")
app.get("/", (req, res) => {
    res.send("SON test")
})

app.get("/test", async (req, res) => {
    try {
        let result = await db.execute("SELECT * FROM user")
        res.json(result[0])
    } catch (err) {
        console.log(err);
    }
})


app.listen(process.env.PORT || 5000, () => {
    console.log("test")
})