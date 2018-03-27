const mongoose    = require('mongoose');



const ContactSchema = mongoose.Schema({
    firstname: {type:String,required:true},
    lastname: {type:String,required:true},
    phone: {type:String,required:true}
});


const Contact = module.exports = mongoose.model('Contact', ContactSchema);