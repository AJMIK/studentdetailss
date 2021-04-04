let express=require('express')
let stud=express()
stud.get('/',(req,res)=>{
    res.send("home page")
})
stud.get('/details',(req,res)=>{
    res.send("AJMI K\tS8,CSE\tRollno:4203\tMCET,PTA\t")
})
stud.listen(3000,()=>{
    console.log("server started http://localhost:3000/")
})