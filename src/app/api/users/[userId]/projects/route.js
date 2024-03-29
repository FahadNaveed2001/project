import { Task } from "@/models/projects";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userId } = params;

  try {
    const projects = await Task.find({
      userId: userId,
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Cannot find projects !!",
      success: false,
    });
  }
}
