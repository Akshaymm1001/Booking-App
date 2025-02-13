const express = require('express')
const cors = require ('cors')
const app = express()
const DBconnect =require('./config/Config')
const UserRouter = require('./Users/Router/UserRouter')
const ShopRouter = require('./Shop/ShopRouter/ShopRouter')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

 async function connectDb(){
try {
    await DBconnect()
console.log("db connected")

} catch (error) {
    console.log (error)   
}
 }connectDb();

app.use('/Users',UserRouter)
app.use('/Shop',ShopRouter)
app.use(cors())

app.listen(1000,() =>{
    console.log('hahahhah')
})
