import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "../../../models/user";
import connect from "../../../utils/db";

connect();

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      try {
        if (account.provider === "google") {
          const existingUser = await User.findOne({ email: profile.email });

          if (existingUser) {
            // User already exists
            return true;
          } else {
            // Create a new user
            const newUser = new User({
              name: profile.name,
              email: profile.email,
              image: profile.picture,
            });
            await newUser.save();
            return true;
          }
        }

        // Returning false for other providers to indicate that the sign-in failed
        return false;
      } catch (err) {
        // Handle the error here, you can throw it to be caught by NextAuth's default error handler
        throw new Error("Authentication failed");
      }
    },
  },
  pages: {
    error: "/login",
  },
});
