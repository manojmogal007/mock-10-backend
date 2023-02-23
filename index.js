const express=require('express')
const {connection}=require('./config/db')
const {userRouter}=require('./routes/user.route')
const {flightRouter}=require('./routes/flight.route')
const {bookingRouter}=require('./routes/booking.route')


const app=express()
app.use(express.json())
app.use('/user',userRouter)
app.use('/flight',flightRouter)
app.use('/book',bookingRouter)


app.listen(5000,async()=>{
    try{
        await connection
        console.log('Connected to database')
    }catch (err){
        console.log(err)
        console.log('Database connection err')
    }
    console.log('Server started on port 5000')
})