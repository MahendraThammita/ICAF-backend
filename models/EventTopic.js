const mongoose = require('mongoose')
const EventTopic = mongoose.Schema({
    date : {
        type : String,
        required : true
    },
    latest : {
        type : String,
        required : true,
    },
    adminApproved : {
        type : String,
        required : true
    },
    topic : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('EventTopic',EventTopic);