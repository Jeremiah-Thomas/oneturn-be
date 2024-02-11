const express = require('express')

const router = express.Router()
const Model = require('../model/model')

router.post('/add', async (req, res) => {
    const data = new Model({
        afflictions: [
        {
            name: req.body.name,
            max_duration: req.body.max_duration,
            cur_duration: req.body.cur_duration,
            color: req.body.color,
            stacks: req.body.stacks}
        ],
        monster_name: req.body.monster_name,
        doom: req.body.doom,
        abyssal_mal: req.body.abyssal_mal
})
    
    try {
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/get', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id
        const updatedData = req.body
        const options = {new: true}
        console.log(updatedData)
        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.json(result)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const data = await Model.findByIdAndDelete(id)
        // console.log(data)
        res.json(data)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

module.exports = router