// import mongoose from "mongoose";
// import dns from "dns";
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);

//     console.log("MongoDB Connected");
//   } catch (error) {
//     console.log("MongoDB Error:", error);
//   }
// };

// export default connectDB;



import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {

  mongoose.connection.on('connected', () => {
    console.log("MongoDB connected");
  });

  await mongoose.connect(`${process.env.MONGODB_URI}/ApnaCart`);
};

export default connectDB;