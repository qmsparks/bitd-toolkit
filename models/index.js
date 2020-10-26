// ANCHOR imports
const mongoose = require('mongoose');

// ANCHOR config
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/bitd';
const configOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};

mongoose
    .connect(connectionString, configOptions)
    .then(() => console.log('MongoDB successfully connected...'))
    .catch((err) => console.log(`MongoDB connection error: ${err}`));


    module.exports = {
        Tool: require('./tool'),
        Component: require('./component'),
        User: require('./user'),
    }
