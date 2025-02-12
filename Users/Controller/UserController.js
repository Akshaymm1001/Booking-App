const { userReg,checkuserLogin ,SeatBookings,checkavailability} = require('../UseCase/UserUseCase');
const{Alluserfn,Bookingfn,BookingDatafn,Availabilefn,Verifyfn} =require('../Repo/UserRepo') 
const jwt =require('jsonwebtoken')
const userRegister = (req, res) => {
    try {
        console.log("Registering user...");
        userReg(req.body);
    } catch (error) {
        console.error(error);
    }
};




const  userLogin = async(req, res) => {
    try {
       
        let user =await checkuserLogin (req.body)
        const secretKey = 'mySecretKey';
        let token = jwt.sign({id:user._id},secretKey,{expiresIn:'1h'})
        if(user){
            res.json({
                succsses:true,
                result:token,
                data : user
            })
        }
        else{
            res.json({
                succsses:true,
                result:"invalid password or email"
            })
        }

    } catch (error) {
        console.error(error);
    }
}
const alluser = async (req,res)=>{
    try {
        console.log(req.headers)
        let  alluser = await Alluserfn()
       res.json({
        succsses:true,
        result:alluser
       })
    } catch (error) {
        
    }
}
const SeatBooking  = async (req,res)=>{
try {
    console.log(req.body)
    let SeaatBooking =await BookingDatafn(req.body)
    console.log(SeaatBooking,"data in controller")
    let TotalRate = await SeatBookings(req.body)
    


    res.json({
        
        TotalRate : TotalRate

    })
} catch (error) {
    console.log(error)
}
}
const viewAvaialability = async (req,res,)=>{
    try {
        console.log(req.headers['authorization'],"userdatain jwt")
       const authHeader = req.headers['authorization'];
const token = authHeader && authHeader.split(' ')[1]; // Extract token
const payload = jwt.verify(token,"mySecretKey");
        console.log(payload,"payload---")
        console.log(authHeader,"payload")
        let body = req.body
        body.userId = payload.id
        
        let Data = {
            body
            
        }
       
        console.log(Data,'data-------------------------///')
        let added = await checkavailability(req.body,Data)
        console.log(Data,"user iddd")
        if(added){
            res.json({succsses:true})
        }else{
            console.log("not added to bookings")
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = { userRegister, userLogin,alluser,SeatBooking,viewAvaialability };
