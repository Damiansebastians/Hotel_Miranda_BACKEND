import bcrypt from "bcryptjs";
import passport from "passport";
import { Strategy as localStrategy } from "passport-local";
import { Strategy as JWTstrategy } from "passport-jwt";
import { ExtractJwt as ExtractJWT } from "passport-jwt";
import { userInterface } from "../database/mongoDB/userInterface";

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email: string, password: string, done) => {
      try {
        const user = await userInterface
          .findOne({
            email: email,
          })
          .exec();
        if (user) {
          let result = await compararPasswords(password, user.password);

          if (result) {
            console.log("Valid credentials!");
            return done(null, { id: user.id, email: email });
          } else {
            return done(new Error("Invalid password!"), false);
          }
        } else return done(new Error("Invalid credentials!"), false);
      } catch (error: any) {
        return done(error);
      }
    }
  )
);

passport.use(
  new JWTstrategy(
    {
      secretOrKey: process.env.SECRET_KEY,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

export async function compararPasswords(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  const isMatch = await bcrypt.compare(password, hashedPassword);

  console.log(password);
  console.log(hashedPassword);
  console.log(isMatch);
  return isMatch;
}
