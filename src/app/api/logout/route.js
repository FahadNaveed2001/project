import { NextResponse } from "next/server";

export async function POST(request) {
  const response = NextResponse.json({
    message: "Logged Out !!",
    success: true,
  });

  // Set the cookie with an expiration date in the past to delete it
  response.cookies.set("MKauthtoken", "", {
    expires: new Date(0),
  });

  return response;
}