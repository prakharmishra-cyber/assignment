const {Schema, default: mongoose} = require('mongoose');

const FormData = Schema({
    email: String ,
    firstname: String,
    lastname: String,
    address: String,
});

module.exports = mongoose.model('formData', FormData);