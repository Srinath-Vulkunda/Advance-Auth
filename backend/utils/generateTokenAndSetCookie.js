import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) =>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: "1h"});

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 3600000, // 1 hour
        sameSite: "strict",
    });
    return token;
} 