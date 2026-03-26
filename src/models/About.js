import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema(
  {
    aboutme: String,
    noofprojects: String,
    yearofexperience: String,
    numberofclients: String,
    skills: String,
  },
  { timestamps: true },
);

const About = mongoose.models.About || mongoose.model("About", AboutSchema);
export default About;
