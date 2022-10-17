import express from "express";
 const app = express();

 app.get(`/`,(req,res) => {
    res.send(`Namra Responding from HTTP Server`);
 })

 const PORT=5001;

 app.listen(PORT,()=>{
    console.log(`RUNNING on PORT ${PORT}`);
 })
// import express from 'express';
  
// const app = express();
  
// app.get('/',(req,res) => {
//     res.send('Zia Responding from HTTP Server');
// })
  
// const PORT = 5001;
  
// app.listen(PORT,() => {
//     console.log(`Running on PORT ${PORT}`);
// })
