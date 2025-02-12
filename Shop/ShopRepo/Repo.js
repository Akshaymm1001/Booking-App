const Shop = require ('../ShopModel/Model')
const seat = require('../ShopModel/SeatModel')
module.exports.CreateShop =async(data)=>{
    try {
    await Shop.create(data)
    return true
       
    } catch (error) {
        console.log(error)
    }
    }
    module.exports.shoplogin  = async(data)=>{
        try {

            console.log(data,"login repo")
           let shop = await Shop.findOne({Email:data})
            return shop
        } catch (error) {
            
        }
    }
module.exports.addSeatfn =async(data)=>{
    try {
        console.log(data,"data in repoo")
        await seat.create(data)
return true
    } catch (error) {
     console.log(error)   
    }
}
module.exports.AllSeatfn = async(data)=>{
    try {
        console.log(data,"all seat in repo")
        let seats = await seat.find()
        return seats
    } catch (error) {
        console.log(error)
    }
}
module.exports.avseatfn = async (data) =>{
    try {
        let availabeseatt = await seat.find({ availableSeat: { $gt: "0" } });
        return availabeseatt; 
    } catch (error) {
        
    }
}
module.exports.GetShopfn=async(data)=>{
    try {
      let   GetSeat= await Shop.find()
      return GetSeat;
    } catch (error) {
      console.log(error)  
    }
}