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
        type: Number,
        trim: true
    },
    cutomerID: { 
        type:String,
        trim: true
    },
    status: { 
        type: Boolean
    }
},{timestamps:true})

module.export = mongoose.model("product",productSchema)