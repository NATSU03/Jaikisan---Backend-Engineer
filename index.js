const express = require("express");
const route = require("./services/routes")
const mongoose = require("mongoose")
const app = express()

mongoose.set('strictQuery', true)
app.use(express.json())


mongoose.connect("mongodb+srv://vishwasw75:9595335675@firstcluster.jde07cq.mongodb.net/test",
{useNewUrlParser:true})

.then(()=> console.log("MongoDb is connected"))
.catch (err => console.log(err))

app.use('/',route);

app.listen(process.env.PORT || 3000 ,function() {
    console.log("Express app running on port" + (process.env.PORT || 3000))
});