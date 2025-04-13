const express = require('express')
const app = express()
const port  = 3000

app.use(express.static('public'))

app.get('/',(req,res) =>{
    res.send("Hello 2")
})

app.get('/contact',(req,res) =>{
    res.send("Contact Us")
})
app.get('/about',(req,res) =>{
    res.send("About Us")
})
app.get('/home/:slug',(req,res) =>{
    res.send(req.params)
    console.log(req.params)
})

app.listen(port,()=>{
    console.log(`Example listening on port ${port}`);
})
