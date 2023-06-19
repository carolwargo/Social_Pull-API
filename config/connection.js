const mongoose = require('mongoose');
// CREATE & NAME --- then add name to mongoose.connect
// WRAP Mongoose around local connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/myfirstmongooseapp');

// EXPORT connection 
module.exports = mongoose.connection;
