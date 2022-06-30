const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect('mongodb+srv://practice_project:password1234@cluster0.32njx.mongodb.net/?retryWrites=true&w=majority');

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;