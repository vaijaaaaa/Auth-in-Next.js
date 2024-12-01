import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
    try {
        // Retrieve the token from cookies
        const token = request.cookies.get("token")?.value || "";
        
        // Verify the token
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!);

        // Return the user ID or any other data encoded in the token
        return (decodedToken as any).id;
    } catch (error: any) {
        throw new Error(error.message);
    }
};
