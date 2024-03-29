import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDb } from "@/helper/db";
connectDb();
export async function POST(request) {
  console.log("login Api");

  const { email, password } = await request.json();

  try {
    const user = await User.findOne({
      email: email,
    });

    //email check
    if (user == null) {
      throw new Error("No User Found!");
    }
    //password check
    const matched = bcrypt.compareSync(password, user.password);
    if (!matched) {
      throw new Error("User Not Found");
    }

    //Token generation

    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWT_TOKEN
    );

    //send token in client

    const response = NextResponse.json({
      message: "Login Done",
      success: true,
      user: user,
    });

    response.cookies.set("MKauthtoken", token, {
      expiresIn: "1d",
      httpOnly: true,
    });

    console.log(user);
    console.log(token);
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Password not matched",
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
