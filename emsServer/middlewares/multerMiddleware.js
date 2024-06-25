const multer=require('multer')

// storage of image .

const storage=multer.diskStorage({

    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{

callback(null,`image-${Date.now()}-${file.originalname}`)
    }

})

// file filtering 

const fileFilter=(req,file,callback)=>{

    if(file.mimetype=='image/jpg' || file.mimetype=='image/png' || file.mimetype=='image/jpeg'){

        callback(null,true)
    }
    else{
        callback(null,false)
       return callback(new Error("only support png/jpg/jpeg fileformat"))
    }
}

const upload=multer({storage,fileFilter})

module.exports=upload