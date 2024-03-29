import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import { Profiler } from "react";

connectDb();
//Get Single User
export async function GET(request, { params }) {
  const { userId } = params;

  try {
    const user = await User.findById(userId).select("-password");
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Cant Find User",
      success: false,
    });
  }
}

//Update Single User
export async function PUT(request, { params }) {
  const { userId } = params;
  const { name, password, about, profileURL } = await request.json();

  try {
    const user = await User.findById(userId);

    user.name = name;
    user.about = about;
    user.password = password;
    user.profileURL = profileURL;

    const updatedUser = await user.save();

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log(error);
    NextResponse.json({
      message: "error Updating User !!",
      success: false,
    });
  }
}

//Delete Single User
export async function DELETE(request, { params }) {
  const { userId } = params;

  try {
    await User.deleteOne({
      _id: userId,
    });

    return NextResponse.json({
      message: "User Deleted !!",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "User Not Deleted",
      success: false,
    });
  }
}
