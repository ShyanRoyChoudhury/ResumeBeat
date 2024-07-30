import prisma from "@repo/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try{
        const { name, email } = await req.json();

        const user = await prisma.waitlist.findUnique({
            where: {
                email
            }
        })

        if(!user){
            await prisma.waitlist.create({
                data:{
                    name,
                    email
                }
            })
            return NextResponse.json({
                message: 'Success'
            })
        }
        return NextResponse.json({
            message: 'Already Registered'
        })

    }catch(e){
        console.log('error: ',e)
        return NextResponse.json({
            message: 'Error saving to waitlist',
        })
    }
}