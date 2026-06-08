const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected 🚀");
    console.log("Database Name:", conn.connection.db.databaseName);

    const collections = await conn.connection.db
      .listCollections()
      .toArray();

    console.log(
      "Collections:",
      collections.map((c) => c.name)
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;