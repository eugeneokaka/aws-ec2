const express=require('express');
const app=express();
port=process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.json({message:"Hello World!"})
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})