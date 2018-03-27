const express 	= require('express');
var bodyParser  = require('body-parser');
const Contact = require('../models/contacts')



// express router
const router = express.Router(); 

module.exports=router;

router.get('/contacts',(req,res,next)=>{
    //res.send('Retreving the contact list');
    Contact.find(function name(err,contacts) {
        res.json(contacts);
    });

}); 

 router.post('/contact',(req,res,next)=>{
   let newContact= new Contact({  
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone:  req.body.phone
      });

      newContact.save((err,contact)=>{
          if (err) {
            res.json({msg:'Failed to add Contact'});
          }
          res.json({msg:'Contact added successfully'});
      });

}); 

router.delete('/contact/:id',(req,res,next)=>{
    Contact.remove({_id:req.params.id},(err,result)=>{
        if (err) {          
          res.json(err);
        }
        res.json(result);
    });
});