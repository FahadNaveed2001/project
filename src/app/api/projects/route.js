import { Task } from "@/models/projects";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { connectDb } from "@/helper/db";

connectDb();

//get all projects
export async function GET(request) {
  try {
    const projects = await Task.find();
    return NextResponse.json(projects);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to find Tasks",
      success: false,
    });
  }
}

//create all Projects
export async function POST(request) {
  const { title, content, language, stack, status, appType, userId } =
    await request.json();

  //fetch user
  const authToken = request.cookies.get("MKauthtoken")?.value;
  //  console.log(authToken);

  const data = jwt.verify(authToken, process.env.JWT_TOKEN);
  //  console.log(data);

  try {
    const project = new Task({
      title,
      content,
      language,
      stack,
      appType,
      status,
      userId: data._id,
    });

    const createdProject = await project.save();

    return NextResponse.json(createdProject, {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to create Task !!!",
      success: false,
    });
  }
}
