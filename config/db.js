const mongoose=require('mongoose')

const connection=mongoose.connect('mongodb+srv://manojmogal:manojmogal@cluster0.idomrq8.mongodb.net/airticket?retryWrites=true&w=majority')

module.exports={connection}