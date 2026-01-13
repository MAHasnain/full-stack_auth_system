import { dbConnect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { config } from "@/config/config";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

dbConnect();
const { token_secret } = config;
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log(email, password);

    // check if user is exist or not
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "user does not exist!" },
        { status: 400 }
      );
    }

    // create token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    // password check correct or wrong
    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) {
      return NextResponse.json({ error: "Invalid password." }, { status: 400 });
    }

    // create token
    const token = await jwt.sign(tokenData, token_secret!, {
      expiresIn: "5d",
    });
    console.log(token);

    const response = NextResponse.json({
      message: "login successful",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
