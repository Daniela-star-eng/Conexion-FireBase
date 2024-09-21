const express = require("express"); //líneas necesarias para arrancar un servidor
require("dotenv").config(); 
const app=express(); 

//middleware para que se ejecute a la mitad 
var saludo=(req,res,next)=>{ //next. funciona para mandar la estafeta al procedimiento que fue llamado
    console.log("Hola"); 
    next(); 
}

app.use(saludo); 

app.get("/",saludo,(req, res)=>{
    res.send("hola estás en raíz");
})

app.get("/home",saludo,(req, res)=>{
    res.send("hola estás en home");
})
const port=process.env.PORT || 3000 //o se recibe uno del Sistema Operativo o se utiliza el puerto 3000 
app.listen(port,()=>{
    console.log("Servidor en http://localhost:"+port); 
}); 
