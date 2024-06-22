import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import session from "express-session";
import passport, { authorize } from "passport";
import { Strategy as OAuth2Strategy } from "passport-google-oauth2";
import UserModel from "./models/userModel.js";
import PostRoutes from "./routes/postRoutes.js";

const app = express();
//enable us to send post req
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(
  cors({
    origin: "https://artfolio-beta.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
); //enables cross origin req
app.use(express.json());

app.use("/posts", PostRoutes);

config(); //access to env
const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.CONNECTION_URL;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

//setup session creates session id on log in, decode it to get the user data
app.use(
  session({
    secret: "12872kqkga2813b",
    resave: false,
    saveUninitialized: true,
  })
);

//setup passport creates session
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new OAuth2Strategy(
    {
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await UserModel.findOne({
          googleId: profile.id,
        }).populate("posts");

        if (!existingUser) {
          const newUser = new UserModel({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            profilePic: profile.photos[0].value,
          });
          await newUser.save();
          return done(null, newUser);
        } else return done(null, existingUser);
      } catch (error) {
        console.log(error.message);
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

//intialize google auth login
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "https://artfolio-beta.vercel.app/",
    failureRedirect: "https://artfolio-beta.vercel.app/auth",
  })
);

app.get("/login/success", async (req, res) => {
  if (req.user) {
    res.status(200).json({ user: req.user });
  } else {
    res.status(400).json({ message: "Not authorized" });
  }
});

app.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("https://artfolio-beta.vercel.app/");
  });
});

//connect database
mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on PORT: ${PORT}`);
    })
  )
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.json("hello");
});
