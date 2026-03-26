import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://nwulubright_db_user:ADmission34@cluster0.8ww03cr.mongodb.net/portfolio-website",
    );
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(error);
  }
}
