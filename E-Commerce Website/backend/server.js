const app = require("./app.js");
const dotenv = require("dotenv");
const path = require("path");
const connectDataBase=require('./config/database.js');

dotenv.config({ path: path.join(__dirname, "config/config.env") });
connectDataBase();
const server=app.listen(process.env.PORT, () => {
  console.log(`Server Listening To Port ${process.env.PORT}`);
});

process.on('unhandledRejection',(err)=>{
  console.log(`Error : ${err.message}`);
  console.log('Shutting Down the server due to unhandled rejection');
  server.close(()=>{
    process.exit(1);
  });
  
})

process.on('uncaughtException',(err)=>{
  console.log(`Error : ${err.message}`);
  console.log('Shutting Down the server due to uncaught exception error');
  server.close(()=>{
    process.exit(1);
  });
})
