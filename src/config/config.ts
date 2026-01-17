type config = {
  mongodb_uri: string;
  token_secret: string;
  mailtrap_token: string;
  mailtrap_host: string;
  mailtrap_port: number;
  mailtrap_username: string;
  mailtrap_password: string;
  domain: string;
};

export const config = {
  mongodb_uri: process.env.MONGODB_URI,
  token_secret: process.env.TOKEN_SECRET,
  mailtrap_token: process.env.MAILTRAP_TOKEN,
  mailtrap_host: process.env.MAILTRAP_HOST,
  mailtrap_port: process.env.MAILTRAP_PORT,
  mailtrap_username: process.env.MAILTRAP_USERNAME,
  mailtrap_password: process.env.MAILTRAP_PASSWORD,
  domain: process.env.DOMAIN
};
