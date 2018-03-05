const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fuel')
.then(() => {
  console.log('Connected to db...');
})
.catch(err => {
  console.log('Error');
})
