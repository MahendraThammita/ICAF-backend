const mongoose = require('mongoose')
const WorkshopSchema = mongoose.Schema({

    title : {
        type : String,
        required : true
    },
    eventDate : {
        type : String,
        required : true
    },
    conductor : {
        type : String,
        required : true
    },
    dateCreated : {
        type : String,
        required : true
    },
    description: {
        type: String,
        required: true
    },
    aproveStatus: {
        type: String,
        required : true
    },
    document: {
        type: String,
        required : true
    }

})

module.exports = mongoose.model('Workshop',WorkshopSchema);