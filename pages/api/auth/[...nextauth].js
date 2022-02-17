import NextAuth from "next-auth";
mongoose = require("mongoose")
import CredentialsProvider from "next-auth/providers/credentials"
import dbConnect from "../../../util/mongo";
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
import User from "../../../models/User";


export default NextAuth({


session: {
    strategy: "jwt",

},
    providers: [
        CredentialsProvider({
            authorize: async function (credentials, res) {

               await dbConnect();

                const user = await User.findOne({username: credentials.username});
                if (!user) {
                    throw new Error("Wrong credentials");
                }

                const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
                const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
                if (originalPassword !== credentials.password) {
                    throw new Error('Incorrect Password.  Please try again.');
                }

                const {password, ...others} = user._doc
               return {...others}


            },
        }),
    ],
    jwt: {
        encryption: true,
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt(token, user) {

            if (user?.accessToken) {
                token.accessToken = user.accessToken;
            }
           return token;
        },
    },
});

