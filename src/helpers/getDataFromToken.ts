import { config } from "@/config/config";
import * as jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export const getDataFromToken = async (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decodedToken: any = await jwt.verify(token, config.token_secret!);
    return decodedToken.id;
  } catch (error: any) {
    console.log({ error: error.message });
    throw new Error(error.message);
  }
};

export default getDataFromToken;
