import express from "express"
const app = express()



app.get("/", (req, res) => {
    res.send("get")
})


app.listen(process.env.PORT || 5000, () => {
    console.log("test")
})