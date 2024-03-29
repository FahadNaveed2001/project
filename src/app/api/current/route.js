import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user";
import { connectDb } from "@/helper/db";

connectDb();
//scsasascasacscascasacscasacsca
export async function GET(request) {
  const authToken = request.cookies.get("MKauthtoken")?.value;
  console.log(authToken);

  const data = jwt.verify(authToken, process.env.JWT_TOKEN);
  console.log(data);

  const user = await User.findById(data._id).select("-password");

  return NextResponse.json(user);
}
