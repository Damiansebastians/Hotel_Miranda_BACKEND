import { NextFunction, Request, Response, Router } from 'express';
import jwt, { Secret } from 'jsonwebtoken';

const loginAuth = Router();

loginAuth.post('/login', async (req: Request, res: Response, next: NextFunction) => {

  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token ) {
    return res.status(401).json({
      auth: false,
      message: 'No token provided'
    });
  }

  const secretKey: Secret = process.env.SECRET_KEY as Secret;
  jwt.verify(token, secretKey, (err, user) => {
      console.log(err);
  
      if (err) {
        return res.status(403).json({ auth: false, message: 'Invalid or expired token' });
      }
    next();
  });
});

export default loginAuth;