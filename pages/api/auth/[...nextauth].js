import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "../../../models/user";
import connect from "../../../utils/db";
//import { MoralisNextAuthProvider } from "@moralisweb3/next";

export default NextAuth({
  // providers: [MoralisNextAuthProvider()],
  // // // adding user info to the user session object
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.user = user;
  //     }
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     session.user = token.user;
  //     return session;
  //   },
  // },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider == "google") {
        try {
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
        } catch (err) {
          // Handle the error here, you can throw it to be caught by NextAuth's default error handler
          throw new Error("Authentication failed");
        }
      } else {
        return false;
      }
    },
  },

  pages: {
    error: "/login",
  },
});

// Ensure the database connection is established before exporting the NextAuth configuration
connect();
