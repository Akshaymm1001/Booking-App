const mongoose=require("mongoose")
 const connectDB = ()=>{
    try {
        return mongoose.connect('mongodb+srv://user:123@cluster0.fwwuj.mongodb.net/BookingSeats?retryWrites=true&w=majority&appName=Cluster0')
    } catch (error) {
        console.log("error")
    }
 }
 module.exports = connectDB;