import { config } from "@/config/config";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

const {
  domain,
  mailtrap_host,
  mailtrap_port,
  mailtrap_username,
  mailtrap_password,
} = config;

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    // create a hashedToken
    const hashedToken = await bcrypt.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    const transport = nodemailer.createTransport({
      host: mailtrap_host,
      port: mailtrap_port,
      auth: {
        user: mailtrap_username,
        pass: mailtrap_password,
      },
    });

    const mailOptions = {
      from: "muhatta427@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<p>Click <a href="${domain}/verifyemail?token=${hashedToken}">here</a> to ${
        emailType === "VERIFY" ? "Verify your email" : "Reset your password"
      }</p>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;

  } catch (error: any) {
    throw new Error(error);
  }
};
