const mongoose = require("mongoose");

const DbConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`mongoDb connected ....`.bgBlue);
  } catch (error) {
    console.log(`mongoDb Error ${error}`.bgYellow);
    process.exit(1);
  }
};

module.exports = DbConnection;
