import { Task } from "@/models/projects";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { projectId } = params;

  try {
    const Project = await Task.findById(projectId);
    return NextResponse.json(Project);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Error Finding the project",
      success: false,
    });
  }
}

export async function PUT(request, { params }) {
  try {
    const { projectId } = params;
    const { title, content, language, stack, appType, status } =
      await request.json();

    let task = await Task.findById(projectId);

    (task.title = title),
      (task.content = content),
      (task.language = language),
      (task.stack = stack),
      (task.appType = appType),
      (task.status = status);

    const updatedproject = await task.save();

    return NextResponse.json(updatedproject);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Error updating Task",
      success: false,
    });
  }
}

export async function DELETE(request, { params }) {

    try {
        const {projectId} = params
        await Task.deleteOne({
            _id: projectId
        })

        return NextResponse.json({
            message: "project deleted Successfully.",
            success: true
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Error Deleting Project",
            success: true
        })
    }
}
