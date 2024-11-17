const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://tanodylane:123@cluster0.olht8.mongodb.net/vue3db?retryWrites=true&w=majority&appName=Cluster0').then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error(err);
}); 