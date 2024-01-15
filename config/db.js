const mongoose = require("mongoose");
const colors = require("colors");
const ConnectDb = async () => {
  try {
    // await mongoose.connect(process.env.MONGODB_URL)
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(
      `Mongo DB connected ${mongoose.mongoose.connection.host}`.bgGreen.white
    );
  } catch (err) {
    console.log(`MongoDb server issue ${err}`.bgWhite.black);
  }
};
module.exports = ConnectDb;
