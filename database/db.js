import mongoose from "mongoose";

export const Connection = async (DATABASE) => {
  const Url = `${DATABASE}`;
  try {
    await mongoose.connect(Url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connected successfully");
  } catch (error) {
    console.log("error while connecting database", error);
  }
};

export default Connection;
