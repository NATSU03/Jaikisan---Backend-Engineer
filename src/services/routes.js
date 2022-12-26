const express= require("express")
const router= express.Router()
const {createCustomers,getCustomersData,deleteCustomersData}= require("../controllers/CustomerController")
const {createCard,getCardsData}= require("../controllers/CardController")

router.post("/Customer",createCustomers)
router.get("/Customer",getCustomersData)
router.delete("/Customer/:CustomerId",deleteCustomersData)

router.post("/Card",createCard)
router.get("/Card",getCardsData)

module.exports= router