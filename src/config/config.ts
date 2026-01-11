type config = {
  mongodb_uri: string;
};

export const config = {
  mongodb_uri: process.env.MONGODB_URI,
};
