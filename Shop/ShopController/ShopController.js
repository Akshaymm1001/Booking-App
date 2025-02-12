const{Reg,login,addSeats}=require('../ShopUseCase/UseCase')
const{AllSeatfn,avseatfn,GetShopfn} =require('../ShopRepo/Repo')
const jwt = require('jsonwebtoken')
const shopreg = (req,res) =>{
    try {
        Reg(req.body)
    } catch (error) {
      console.error(error)  
    }
}
const shoplogin = async (req,res) =>{
    try {
        console.log(req.body)
    let   shop =await login(req.body)
            const secretKey = 'mySecretKey';
            let token = jwt.sign({shop},secretKey,{expiresIn:'1h'})
                    if(shop){
                        res.json({
                            succsses:true,
                            result:token
                        })
                    }
                    else{
                        res.json({
                            succsses:true,
                            result:"invalid password or email"
                        })
                    }
    } catch (error) {
        console.error(error)
    }
}
const AddSeat =async (req,res)=>{
    try {
        addSeats(req.body) 
        console.log (req.body,"suiiii")
    } catch (error) {
       console.log(error) 
    }
}
const GetAllSeat = async ()=>{
    try{
        let seats =await AllSeatfn()

        console.log(seats,"all seat")
        
    }catch(error){
        console.log(error)
    }
}
const findseat = async (req,res)=>{
    try {
       let id =req.params.id;
       console.log(id)
       let seat =await AllSeatfn(id)
       res.json({
        success:true,
        result:seat
       })
    } catch (error) {
      console.log(error)  
    }
}
const availableseats = async(req,res) => {
    try {
        let availabeseat = await avseatfn()
        console.log(availabeseat,"yoyooyoyooy")
    } catch (error) {
        console.log(error)
    }
}
const getalllshop = async(req,res)=>{
    try {
        let AllShop = await GetShopfn()
        console.log(AllShop,"successfullyyyy")
    } catch (error) {
       console.log(error) 
    }
}
module.exports= {shopreg,shoplogin,AddSeat,GetAllSeat,findseat,availableseats,getalllshop}
