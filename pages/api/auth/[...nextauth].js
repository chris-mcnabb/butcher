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
            console.log("auth token location", token)
            if (user?.accessToken) {
                token.accessToken = user.accessToken;
            }
           return token;
        },
    },
});

/*const handler = async(req, res) => {
    const {method} = req;
    dbConnect()

    if(method === "POST"){
        const {username} = req.body
        try{
            const user = await User.findOne({username});
            !user && res.status(401).json("Wrong credentials")
            const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC );
            const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
            originalPassword !== req.body.password && res.status(401).json('Incorrect Password.  Please try again.');
            const accessToken = jwt.sign({
                    id: user._id,
                    isAdmin: user.isAdmin,
                },process.env.JWT_SEC,
                {expiresIn: "3h"});
            const {password, ...others} = user._doc

            res.status(200).json({...others, accessToken})
        }catch(err){
            res.status(401).json(err);

        }

    }

}

export default handler;*/
