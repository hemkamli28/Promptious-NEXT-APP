import User from "@/models/user";
import { connectToDB } from "@/utils/db";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId : process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET 
        })
    ],
    callbacks: {
        async session({session}){
            const sessionUser = await User.findOne({email : session.user.email});
    
            session.user.id = sessionUser._id.toString();
            return session;
        },
        async signIn({profile}){
            try {
                await connectToDB();
                //check if user exists
                const userExists = await User.findOne({email: profile.email})
                //save the user to db 
                if(!userExists){
                    await User.create(
                        {
                            email: profile.email,
                            username: profile.name.replace(" ", "").toLowerCase(),
                            image: profile.picture
                        });
                }
                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        }
    }
   
});

export {handler as GET, handler as POST }