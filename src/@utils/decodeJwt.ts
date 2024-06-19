import jwt from "jsonwebtoken";

export function decodeJwtToken(token: string) {
  try {
    const decoded = jwt.decode(token);
    if (typeof decoded === "object" && decoded !== null) {
      return decoded.sub;
    }
    return null;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
}
