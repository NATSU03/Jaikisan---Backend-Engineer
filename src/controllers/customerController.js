const customermodel = require("../models/customerModel")


const createCustomers= async function(req,res){
    try{

        let data= req.body
        let createCustomer = await customermodel.create(data)
        return res.status(201).send({status:true,data:createCustomer})

    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}

//============================================get data=============================================//


const getCustomersData= async function(req,res){
    try{
        let getData= await customermodel.find({status:"ACTIVE"})
        
        return res.status(200).send({status:true,data:getData})

    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}


//==========================================delete Data==========================================//


const deleteCustomersData= async function(req,res){
    try{
        let CustomerId= req.params.CustomerId
       
        let deleteData= await customermodel.findOneAndUpdate({_id:CustomerId},{isDeleted:true,deletedAt:Date.now()},{new:true})

        if (!deleteData){return res.status(404).send({status:false,msg:"customers data is either deleted or doesn't exit "})}

        return res.status(200).send({status:true,data:deleteData})

    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}


module.exports= {createCustomers,getCustomersData,deleteCustomersData}