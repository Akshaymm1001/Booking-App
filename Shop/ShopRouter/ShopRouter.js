const express=require('express')
const router =express.Router()
const {shopreg,shoplogin,AddSeat,GetAllSeat,findseat,availableseats,getalllshop}=require('../ShopController/ShopController')
const {VerifyToken}= require('../../Middleware/middleware')

router.route('/auth/shopreg').post(shopreg)
router.route('/auth/shoplogin').post(shoplogin)
router.route('/ShopSeat').post(AddSeat)
router.route('/getallseats').get(GetAllSeat)
router.route('/findseat/:id').get(VerifyToken,findseat)
router.route('/availabeseats').get(availableseats)
router.route('/Getallshop').get(getalllshop)
module.exports=router