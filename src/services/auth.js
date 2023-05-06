import bcryptjs from "bcryptjs";

export const createPasswordHash = async (password) => {
  return bcryptjs.hash(password, 8);
};
