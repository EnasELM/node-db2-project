// DO YOUR MAGIC
const express = require('express')

const router = express.Router()

const Car = require('./cars-model')

const {
  checkCarId,
  checkVinNumberUnique,
  checkCarPayload,
  checkVinNumberValid  
} = require('./cars-middleware')
router.get('/', async  (req, res, next) => {
  try{
     const cars = await Car.getAll()
     res.json(cars)
  } catch(error) {
      next(error)
    }
   
  })

  router.get('/:id', checkCarId, (req, res, next) => {
    res.json(req.car)
       
  })
  
  router.post('/',
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
   async (req, res, next) => {
   try{
     const car = await Car.create(req.body)
     res.json(car)
   }catch(err){
     next(err)
   }
 })

  module.exports = router
  
