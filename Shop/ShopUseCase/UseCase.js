const bycrypt  = require('bcryptjs')
const {CreateShop,shoplogin,addSeatfn}=require('../ShopRepo/Repo')
module.exports. Reg = async (data) =>{
   try {
      let{ Password}=data
      const saltRound=10;
      const HarshedPassword=await bycrypt.hash( Password,saltRound);
      data.Password = HarshedPassword;
      console.log(data)
      await CreateShop(data)
      return true
     
   } catch (error) {
    console.log(error)    
   }
}
module.exports.login =async(data)=>{

try {
   let {Email} =data;
   let shop = await shoplogin (Email)
   console.log(shop,"Data from shop")
let result =await bycrypt.compare(data.Password,shop.Password)
console.log(result,".................")
if (result==true)
{
   return shop
}
else{
   return false
}
} catch (error) {
    console.log(error)
}
}
module.exports.addSeats=async(data)=>{
   try {
      let date  =new Date()
      data.date = date.toISOString().split("T")[0];
      addSeatfn(data)
   } catch (error) {
      console.log(error)
      
   }
}