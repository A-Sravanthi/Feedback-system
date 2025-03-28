const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User"); // Adjust path if needed

passport.use(
  new GoogleStrategy(
    {
      clientID: "113116392919-meebv19g37rquenptdmm3csupls2bq6h.apps.googleusercontent.com", // Replace with your actual Client ID
      clientSecret: "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", // Replace with your actual Client Secret
      callbackURL: "http://localhost:5000/auth/google/callback", // Make sure this matches Google Console
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          user = new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
          });
          await user.save();
        }

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

module.exports = passport;
