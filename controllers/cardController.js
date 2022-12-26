const cardModel = require("../models/cardModel")

const createCard= async function(req,res){
    try{
        let data = req.body

        let Card = await cardModel.create(data)

        return res.status(201).send({status:true,data:Card})

    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }

    
}

// -------------------------get Card data-----------------------------//

const getCardsData= async function(req,res){
    try{

        let cardsdata = await cardModel.find()

        return res.status(200).send({status:true,data:cardsdata})

    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}


module.exports= {createCard,getCardsData}