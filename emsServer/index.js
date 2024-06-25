require('dotenv').config()

// server creation 

const express= require('express')
const cors=require('cors')
const router = require('./Routers/routes')


const server=express()


server.use(cors())
server.use(express.json())
server.use(router)

// to export the image in backend to client side
 
server.use('/uploads',express.static("./uploads"))
 //        pathname   function          folder 

require('./connections/connection')

const port=4000 ||process.env.port
server.listen(port,()=>{
    console.log(`_____EMS server started at port ${port}___`);   
})