//importing modules
var express 	= require('express');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var cors    = require('cors');
var path    = require('path');


var app = express();


//connect db

mongoose.connect('mongodb://localhost:27017/contactlist', function(err){
	if(err){
		console.log('Error connecting database, please check if MongoDB is running.');
	}else{
		console.log('Connected to database...');
	}
}); 


const route = require('./routes/route')

app.use(cors());
app.use(bodyParser.json());
// all static in one folder public for same below
app.use(express.static(path.join(__dirname,'public')));
app.use('/api', route);

//port
var port = 3000;

//test

app.get('/',(req,res)=>{
    res.send('hello');
});


// kick off the server 
app.listen(port,()=>{
    console.log('Server listening at port' + port);
});