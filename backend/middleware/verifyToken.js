import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) return res.status(401).json({ success: false, message: "Unauthorized" });
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded) return res.status(401).json({ success: false, message: "Unauthorized-invalid token" });
        req.userId = decoded.userId; // Assuming the token contains the user ID
        next();
    }catch(err){
        return res.status(403).json({ success: false, message: "Invalid token" });
    }
}