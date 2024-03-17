const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected to mongodb');
}).catch(() => {
    console.log('Failed to connect to mongodb');
})