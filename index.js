const express=require('express');
const app=express();
port=process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.json({message:"Hello World!"})
})
app.get('/about',(req,res)=>{
    res.json({message:"This is the about page"})
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})