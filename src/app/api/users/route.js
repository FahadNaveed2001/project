import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connectDb();

export async function GET(request) {
  let users = [];
  try {
    users = await User.find().select("-password");
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Cant find any users",
      success: false,
    });
  }

  return NextResponse.json(users);
}

export async function POST(request) {
  try {
    const { name, email, password, about, profileURL } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        {
          message: "Email and password are required",
          status: false,
        },
        { status: 400 }
      );
    }

    const user = new User({
      name,
      email,
      password,
      about,
      profileURL,
    });

    user.password = await bcrypt.hashSync(
      user.password,
      parseInt(process.env.BCRYPT_SALT)
    );
    console.log(user);

    const createdUser = await user.save();

    return NextResponse.json(createdUser, {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Failed to create user",
        status: false,
      },
      { status: 500 }
    );
  }
}
