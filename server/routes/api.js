const express = require('express')
const router = express.Router()
const Dog = require('../models/dogs')

router.get('/dogs/', ( req, res, next ) => {
    Dog.find({})
    .then((data) => res.json(data))
    .catch(next)
})

router.post('/dogs/', (req, res, next) =>{
    req.body.src && req.body.dogName  && req.body.shortDescription  && req.body.gender  && req.body.age && req.body.size ?
    Dog.create(req.body)
        .then((data) => res.json(data))
        .catch(next) :
        res.json({error: 'this input is empty'})
})

module.exports = router