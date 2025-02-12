const express = require ('express');
const router = express.Router()
const {userLogin, userRegister,alluser,SeatBooking,viewAvaialability} =require ('../Controller/UserController')
const {VerifyToken} = require('../../Middleware/middleware')
router.route('/auth/userlogin').post( userLogin)
router.route('/auth/userregister').post(userRegister)
router.route('/allusers').get(VerifyToken,alluser)
router.route('/seatbooking').post(SeatBooking)
router.route('/viewAvailability').post(viewAvaialability)

module.exports = router
