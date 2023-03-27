const mongoose = require('mongoose');

exports.connect = () => {
  mongoose.connect(process.env.MONGODB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on('open', () => console.info('MongoDB: Connected!'));
  mongoose.connection.on('err', () => console.info('MongoDB: Error!'));
};
