var mongoose = require("mongoose");
var mongoURI = "mongodb://localHost/maram";
var db = mongoose.connection;
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  type : String,
  color:String,
  price:String
})

var usersModel = mongoose.model('usersModel',usersSchema);

mongoose.connect(mongoURI,{useMongoClient: true});
db.once("open", function(){
   console.log("connect to db");
 }).on("error", function(){
   console.log("ERROR CONNECT to db");
 })

module.exports = usersModel;