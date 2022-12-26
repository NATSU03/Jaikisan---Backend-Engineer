const mongoose = require ("mongoose")

const productSchema = new mongoose.Schema({
    
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },

    mobileNumber: { 
        type: Number,
        required: true,
        unique: true,
        trim: true
    },
    DOB: { 
        type: Date
    },
    emailID: { 
        type: String,
        trim: true
    },
    address: { 
        type: String,
        trim: true
    },
    cutomerID: { 
        type:String,
        trim: true
    },
    status: { 
        type: String
    }
},{timestamps:true})

module.exports = mongoose.model("product",productSchema)