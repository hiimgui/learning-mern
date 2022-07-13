
const express = require('express')


const router = express.Router()

router.get('/', (req, res) => {
  res.json({mssg:'get all the workouts'})
})

//get a single workout
router.get('/:id', (req, res)=>{
  res.json({mssg:'GET a single workout'})
})

router.post('/', (req, res)=>{
  res.json({mssg:'POST a new workout'})
})

router.delete('/:id', (req, res)=>{
  res.json({mssg:'deleted a workout'})
})

router.patch('/:id', (res,req)=>{
  res.json({mssg:'patched a new workout'})
})

module.exports = router
