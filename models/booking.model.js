const mongoose=require('mongoose')


const bookingSchema=mongoose.Schema({
    user : { type: String, ref: 'User' },
	flight : { type: String, ref: 'Flight' }
})

const Bookingmodel=('book',bookingSchema)

module.exports={Bookingmodel}