const express = require('express');
const router = express.Router()

//importing models
const ResearchModel = require('../models/ResearchPaperModel')

//get all researches
router.route("/").get((req,res) => {

    ResearchModel.find()
    .then( (researches) =>{
        res.json(researches);
    }).catch((err) => {
        console.log(err);
    })
})

//pending approvals
router.get('/pending',async (req,res) =>{
    try{
        const data = await ResearchModel.find()
        const array = [];
        data.forEach(item => {
            item.isApproved == 'pending' ? array.push(item) : array.push()
        });
        res.json(array)
    }catch(err){
        res.json({message : err})
    }
    
})

//approved researches
router.get('/approved',async (req,res) =>{
    try{
        const data = await ResearchModel.find()
        const array = [];
        data.forEach(item => {
            item.isApproved == 'Approved' ? array.push(item) : array.push()
        });
        res.json(array)
    }catch(err){
        res.json({message : err})
    }
    
})

//update status of a workshop as approved
router.patch('/approve/:id',async (req,res) =>{
    try{
       const updatedWorkshop =  await WorkshopModel.updateOne({_id:req.params.id}, {$set : {isApproved : "Approved"}})
       res.json(updatedWorkshop)
    }catch(err){
        res.json(err)
    }
})

//update status of a workshop as declined
router.patch('/decline/:id',async (req,res) =>{
    try{
       const updatedWorkshop =  await WorkshopModel.updateOne({_id:req.params.id}, {$set : {aproveStatus : "Declined"}})
       res.json(updatedWorkshop)
    }catch(err){
        res.json(err)
    }
})

module.exports = router;