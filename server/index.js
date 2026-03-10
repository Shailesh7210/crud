const express = require ('express')
const databaseConnection = require ('./databse.js')
const bookRouter = require("./routes/book.route")

const app = express();

app.use(express.json());
app.get('/', (req,res)=>{
    res.send('server is running')
})

app.use('/book', bookRouter)

databaseConnection();
app.listen(3080,()=>{
    console.log("port is listning on port 3080")
    
})