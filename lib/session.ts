import { getServerSession } from "next-auth/next";
import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from 'next-auth/providers/google'
import jsonwebtoken from 'jsonwebtoken'
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_Client_SECRET!
        })
    ],
    // jwt: {
    //     encode: ({ secret, token }) => {
    //
    //     },
    //     decode: async  ({ secret, token }) => {
    //
    //     }
    // },
    theme: {
        colorScheme: 'light',
        logo: '/logo.png'
    },
    callbacks: {
        async session({ session }){
            return session;
        },
        async signIn({ user }: { user: AdapterUser | User }){
            try {
                // get the user if they exist

                // if they don't exist, create them
                console.log(user)
                return true;
            } catch (error) {
                console.log(error)
                return false;
            }
        }
    }
}