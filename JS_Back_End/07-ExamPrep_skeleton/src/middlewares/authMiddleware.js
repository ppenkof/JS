import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../config/constants.js";


export function authMiddleware(req, res, next) {
    const token = req.cookies['auth'];

    if (!token) {
      return next();
    } 

    try {
        const decodeedToken = jwt.verify(token, JWT_SECRET); 
        
        req.user = decodeedToken;
        req.isAuthenticated = true;
        next();
    } catch (error) {
        res.clearCookie('auth');
        res.redirect('/users/login');
    }
    

    
} 