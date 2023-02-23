const express=require('express')
const {Flightmodel}=require('../models/flights.model')


const flightRouter=express.Router()

flightRouter.get('/flights',async(req,res)=>{
    try{
        const allflights=await Flightmodel.find()
        res.send({'status':200,'flights':allflights})
    }catch (err){
        console.log(err)
        res.send({'msg':'Something went wrong'})
    }
})

flightRouter.get('/flights/:id',async(req,res)=>{
    const id=req.params.id
    try{
        const flight=await Flightmodel.findOne({_id:id})
        res.send({'status':200,'flights':flight})
    }catch (err){
        console.log(err)
        res.send({'msg':'Something went wrong'})
    }
})
flightRouter.patch('/flights/:id',async(req,res)=>{
    const id=req.params.id
    try{
        await Flightmodel.findByIdAndUpdate({_id:id},req.body)
        res.send({'status':204,'msg':'Flight updated successfully'})
    }catch (err){
        console.log(err)
        res.send({'msg':'Something went wrong'})
    }
})
flightRouter.delete('/flights/:id',async(req,res)=>{
    const id=req.params.id
    try{
        await Flightmodel.findByIdAndDelete({_id:id})
        res.send({'status':202,'msg':'Flight deleted successfully'})
    }catch (err){
        console.log(err)
        res.send({'msg':'Something went wrong'})
    }
})

flightRouter.post('/flights',async(req,res)=>{
    const new_flight=req.body
    try{
        const allflights=new Flightmodel(new_flight)
        await allflights.save()
        res.send({'status':201,'msg':'Flight added successfully'})
    }catch (err){
        console.log(err)
        res.send({'msg':'Something went wrong'})
    }
})


module.exports={flightRouter}