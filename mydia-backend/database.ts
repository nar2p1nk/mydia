import {PrismaClient} from "@prisma/client";
import { v4 } from "uuid";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();


async function getAllUsers(){

    const allUsers = await prisma.users.findMany()
    .then(async (v) => {
        console.log(v)
        await prisma.$disconnect()  
    })
    .catch(async (e) => {

        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })

    return allUsers
}

async function createUser(
    email:string,username:string,firstName:string,
    lastName:string,password:any){

    bcrypt.hash(password, 13,(err,hash)=>{
        if(err){console.log(err);return err;}

        prisma.users.create({
            data:{
                user_id:v4(),
                email:email,
                username:username,
                firstName:firstName,
                lastName:lastName,
                password:hash,
            }
        })
        .then(async(v)=>{
            console.log('user created',v)
            await prisma.$disconnect()
        })
        .catch(async(err)=>{console.log(err);await prisma.$disconnect()})

    })
}

//createUser('yellow@pink.com','yellowPiss','Yellow','piss','eatass')

getAllUsers()
    
