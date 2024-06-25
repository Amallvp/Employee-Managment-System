// db connection

const mongoose=require('mongoose')
mongoose.connect(process.env.base_url,{
    // useUnifiedTopology:true,
    // useNewUrlParser:true
}).then(()=>{ 
    console.log(`___MongoDB Atlas Connected`);
}).catch((error)=>{
    console.log("connection error",error);
}) 
