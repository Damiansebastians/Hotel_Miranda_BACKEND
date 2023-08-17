// import { NextFunction, Request, Response, Router } from 'express';
// import jwt, { Secret } from 'jsonwebtoken';

// const loginAuth = Router();

// loginAuth.post('/login', async (req: Request, res: Response, next: NextFunction) => {

//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];

//   if (token == null) {
//     return res.status(401).json({
//       auth: false,
//       message: 'No token provided'
//     });
//   }

//   const secretKey: Secret = process.env.SECRET_KEY as Secret;
//   jwt.verify(token, secretKey, (err, user) => {
  
//       if (err) {
//         return res.status(403).json({ auth: false, message: 'Invalid or expired token' });
//       }
//     next();
//   });
// });

// export default loginAuth;

// import passport from "passport";
// import bcrypt from "bcryptjs";
// import { Strategy as localStrategy } from "passport-local";
// import { Strategy as JWTstrategy } from "passport-jwt";
// import { ExtractJwt as ExtractJWT } from "passport-jwt";
// import { User } from "../models/users";

// // Configuración de la estrategia local
// passport.use(
//   "login",
//   new localStrategy(
//     {
//       usernameField: "email",
//       passwordField: "password",
//     },
//     async (email: string, password: string, done) => {
//       try {
//         const user = await User.findOne({ email: email }).exec();
//         if (!user) {
//           return done(null, false, { message: "Invalid credentials!" });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//           return done(null, false, { message: "Invalid password!" });
//         }

//         console.log("Valid credentials!");
//         return done(null, { id: user.id, email: email });
//       } catch (error) {
//         return done(error);
//       }
//     }
//   )
// );

// // Configuración de la estrategia JWT
// passport.use(
//   new JWTstrategy(
//     {
//       secretOrKey: process.env.SECRET_KEY,
//       jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
//     },
//     async (token, done) => {
//       try {
//         return done(null, token.user);
//       } catch (error) {
//         done(error);
//       }
//     }
//   )
// );

// export default passport;

import bcrypt from "bcrypt";
import jwt, { Secret } from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";
import { userInterface } from "../database/mongoDB/userInterface";


const secretKey: Secret = process.env.SECRET_KEY as Secret;

// Función para crear un token JWT
function generateToken(user: { id: string; email: string }): string {
  return jwt.sign(user, secretKey, { expiresIn: "1h" });
}

// Middleware de autenticación basado en tu middleware anterior
async function loginAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.status(401).json({
      auth: false,
      message: 'No token provided'
    });
  }

  const secretKeyToken = process.env.SECRET_KEY;
  jwt.verify(token, secretKeyToken, async (err, decoded: any) => {
    if (err) {
      return res.status(403).json({ auth: false, message: 'Invalid or expired token' });
    }

    // Aquí se ejecuta el middleware de autenticación personalizado
    try {
      const user = await userInterface.findOne({ email: decoded.email }).exec();
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials!" });
      }

      const isMatch = await bcrypt.compare(decoded.password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials!" });
      }

      // Si la autenticación fue exitosa, generamos y enviamos un nuevo token
      const newToken = generateToken({ id: user.id, email: decoded.email });
      res.json({ token: newToken });

      // Pasamos al siguiente middleware
      next();
    } catch (error) {
      return res.status(500).json({ message: "Authentication error" });
    }
  });
}

export default loginAuth;

