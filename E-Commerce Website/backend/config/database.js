const mongoose=require('mongoose');


const connectDataBase=()=>{
  mongoose.connect(process.env.DB_LOCAL_URI).then((res)=>{
    console.log(`MongoDb is connected to the host: ${res.connection.host}`);  
  }).catch((err)=>{console.log(`${err}`);
  })
};

module.exports=connectDataBase;