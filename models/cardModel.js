const mongoose= require("mongoose")

const cardSchema= new mongoose.Schema({

    cardNumber: {
        type: String,
        trim: true
    },
    cardType: {
        type: String,
        trim: true,
        enum:["REGULAR","SPECIAL"]
    },

    customerName: { 
        type: String,
        trim: true
    },
    status: { 
        type: String,
        enum: ["ACTIVE","INACTIVE"],
        default:"ACTIVE"
    },
    vision: { 
        type: String,
        trim: true
    },
    customerID: { 
        type: Number,
        trim: true
    }
    
},{timestamps:true})

module.exports= mongoose.model("Card",cardSchema)