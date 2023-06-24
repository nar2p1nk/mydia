import {PrismaClient} from "@prisma/client";
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();


async function getAllUsers(){

    const allUsers = await prisma.user.findMany()

    return allUsers
}

getAllUsers()
    .then(async (v) => {
        console.log(v)
        await prisma.$disconnect()  
    })
    .catch(async (e) => {

        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
    
