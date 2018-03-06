const express = require("express");
const app = express();
app.listen(3000, function(){
    console.log("listening on 3000!")
})

app.get("/",(req, res) =>{
    res.sendFile(__dirname + "/index.html")

})
console.log(__dirname)
console.log("May the node be with you...")

console.log("lavell's the best! :D")

console.log("Lilly, Thank you , you won't understand it.:)")
