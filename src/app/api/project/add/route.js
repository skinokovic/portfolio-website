import connectToDB from "@/database";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    console.log("API HIT 🔥"); // 👈 add this
    await connectToDB();
    const extractData = await req.json();
    // console.log("EXTRACTED DATA:", extractData); // ← add this
    const saveData = await Project.create(extractData);
    // console.log("SAVED DATA:", saveData); // ← add this
    if (saveData) {
      return NextResponse.json({
        success: true,
        message: "Data saved successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong Please try again",
      });
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Something went wrong Please try again",
    });
  }
}
