const mongoose = require('mongoose')

const afflictionSchema = new mongoose.Schema({
    name: {
        required: false,
        type: String
    },
    max_duration: {
        required: false,
        type: Number
    },
    cur_duration: {
        required: false,
        type: Number
    },
    color: {
        reqiured: false,
        type: String
    },
    stacks: {
        required: false,
        type: Number
    }

})

const monsterSchema = new mongoose.Schema({
   afflictions: {
    type: [afflictionSchema],
    required: false
   },
   monster_name: {
    type: String,
    required: true
   },
   doom: {
    type: Boolean,
    required: false
   },
   abyssal_mal: {
    type: Boolean,
    required: false
   }
},{collection: 'monsters'})


module.exports = mongoose.model('Data', monsterSchema)