 const bycrypt  = require('bcryptjs')
 const jwt = require('jsonwebtoken')
 const {CreateUser,useloginfn,Bookingfn,BookingDatafn,SeatAvailabilityCheckFn,BookDataWithUserfn} = require('../Repo/UserRepo')
 
 module.exports. userReg = async (data) =>{
try {
   let{ Password}=data

   
   const saltRound=10;
   const HarshedPassword=await bycrypt.hash( Password,saltRound);
   data.Password = HarshedPassword;
   await CreateUser(data)
   return true
} catch (error) {
 console.log(error)    
}
 };
module.exports.checkuserLogin = async (data) => {
    try {
      console.log(data,"at use case")
       let {Email}=data;
       let users =await useloginfn(Email)
       console.log(users,"user returned at usecase")
       users = users[0];
       let result =await bycrypt.compare(data.Password,users.Password)
       console.log(result,"result in password checking")
       if(result ==true){
         return users}


         else{
return false
       }

    } catch (error) {
        console.error("Error in user login:", error);
    }
};
module.exports.SeatBookings = async(data)=>{
  try {
    let {id} = data
    console.log(data,"user data--   ")
    let tableData =  await Bookingfn(id)
    tableData=tableData[0]
   console.log(tableData,"--table data")
   let availableSeats = tableData.availableSeat
    let userdata = data.seatyouwant
    let updatedSeat = parseInt(availableSeats) - parseInt(userdata)
    console.log("balance seat",updatedSeat)
    let balance = data.balanceseat
    balance = updatedSeat
    let{seatyouwant} = data
   let RatePerSeat= tableData.Rate / tableData.SeatPertable
   let TotalRate = RatePerSeat * seatyouwant
   console.log(TotalRate)
   data.balanceseat = updatedSeat
   BookingDatafn(data)
   console.log(data,"000000")
   return TotalRate
  } catch (error) {
    console.log(error)
  }
}

module.exports.checkavailability = async(data)=>{
  console.log(data,"dataaaaaaaaaaaaaa")
  try {
    let {id, datee, seatyouwant} = data
let user_id = data.payload;

    let Tabledata = await SeatAvailabilityCheckFn(id)
    console.log(Tabledata,"AT USECAUSE")
    
    const UserDate = Tabledata.date
    const availableseat = Tabledata.balanceseat
    if(datee === UserDate){
      if(parseInt(  seatyouwant )<=availableseat){
        console.log("booked")
        let availableseatt =  parseInt(availableseat)-parseInt(seatyouwant)
        data.balanceseat = availableseatt
       
       
        console.log()
        //get token
        //get payload
        //extract userid
        BookDataWithUserfn(data)
        return true
      }else{
        console.log(" booking faild available seat",availableseat)
        return false
      }
    }else{
      console.log("Seat Booked")
    }

    
    
  } catch (error) {
    console.log(error)
    return false
  }
}