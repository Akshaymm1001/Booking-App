const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,  
    Email: { type: String, required: true },
    Name: { type: String, required: true },
    Address: { type: String, required: true },
    PhnNum: { type: String },
    Password: { type: String, required: true }
});

const BookingSchema = new mongoose.Schema({
   
    seatyouwant:{
        type:String,
        requierd:true
    },
    date:{
        type:String,
        requierd:true
    },
    startingtime:{
        type:String,
        require:true
    },
    id:{
        type:String,
        require:true,

    },
    balanceseat:{
        type:String,
        require:true,
    },
    user: {
        type: UserSchema,
        required: true
    }

})
const userbookings=mongoose.model('bookings',BookingSchema)
module.exports= userbookings