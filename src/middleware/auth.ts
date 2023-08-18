import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JWTstrategy, ExtractJwt } from "passport-jwt";
import { userInterface } from "../database/mongoDB/userInterface";

passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "name",
      passwordField: "password",
    },
    async (name: string, password: string, done) => {
      try {
        const user = await userInterface.findOne({ name });
        if (!user) {
          return done(null, false, { message: "Invalid credentials!" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return done(null, false, { message: "Invalid credentials!" });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  new JWTstrategy(
    {
      secretOrKey: process.env.SECRET_KEY,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);

export async function hashPassword(password: string) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}
