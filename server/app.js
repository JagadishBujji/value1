const express=require('express')
const app=express();
const cors=require('cors')
const bodyParser=require('body-parser')
const router=require('./routes/router')

app.use(cors({
    origin:"*",
    methods:["GET","POST","PUT","PATCH","DELETE"],
    credential:true
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.listen(5000,()=>{
    console.log("listening post 5000")
})

app.use(router)