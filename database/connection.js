const mongoose= require('mongoose')
const DB  = async( )=>{
    try {
         const con = await mongoose.connect( 'mongodb://localhost:27017/Signup', {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    });

mongoose.connection.on("open", () => {
    console.log("Mongoose connected successfully")
});
} catch(error){

}}
module.exports = DB;