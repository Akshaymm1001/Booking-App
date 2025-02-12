const usermodel = require('../Model/usermodel')
const userbookings = require('../Model/BookingModel')
const SeatModel = require('../../Shop/ShopModel/SeatModel')
const seat = require('..//..//Shop/ShopModel/SeatModel')
module.exports.CreateUser =async(data)=>{
try {

    await usermodel.create(data)
    return true
} catch (error) {
    console.log(error)
}
}
module.exports.useloginfn  = async(data)=>{
    try {
        console.log(data,"login repo")
        let user = await usermodel.find({Email:data})
        return user;
        
    } catch (error) {
        
    }
}
module.exports.Alluserfn =async(data)=>{
    try {
        let allusers = await usermodel.find()
        return allusers
    } catch (error) {
        
    }

}
module.exports.Bookingfn = async (data)=>{
    try {
        
       let Tabledata = await SeatModel.find({Id:data})
     
        return Tabledata
    } catch (error) {
       console.log(error) 
    }
}

module.exports.BookingDatafn = async(data)=>{
try {
    console.log(data,"FROM REPOOO")
    let BookData = await userbookings.create(data)
    console.log(BookData,"data in repo")
    return BookData
} catch (error) {
    console.log(error)
}
}
module.exports.SeatAvailabilityCheckFn  = async(data)=>{
    try {
        let Tabledata = await userbookings.find({id:data})
        Tabledata = Tabledata[0]
        
        return Tabledata
    } catch (error) {
        console.log(error)
    }
}
module.exports.Availabilefn= async(data)=>{
    try {
        let tabledata = await seat.find({Id:data}) 
        
    } catch (error) {
        
    }
}
module.exports.BookDataWithUserfn=async(data)=>{
    try {
        console.log(data)
        let user = await usermodel.find({_id:data.userId})
        user =user[0]
        let Userinputs = data
        Userinputs.user = user
        console.log(Userinputs,"USER INPUTS")
    let BookData = await userbookings.create(data)
    } catch (error) {
     console.log(error)   
    }
}


