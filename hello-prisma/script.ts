import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // READ WITH RELATION
    // const usersWithPosts = await prisma.user.findMany({
    //     include: {
    //         posts: true,
    //     },
    // })
    // console.dir(usersWithPosts, { depth: null })

    // CREATE WITH RELATION
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'Bob',
    //         email: 'bob@prisma.io',
    //         posts: {
    //             create: {
    //                 title: 'Hello World',
    //             },
    //         },
    //     },
    // })
    // console.log(user)

    // READ
    // const users = await prisma.user.findMany()
    // console.log(users)

    // CREATE
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'Alice',
    //         email: 'alice@prisma.io',
    //     },
    // })
    // console.log(user)

    // DELETE
    // const user = await prisma.user.delete({
    //     where:{
    //         id:1
    //     }
    // })

    // UPDATE
    // const user = await prisma.user.update({
    //     where: {
    //         id: 2,
    //     },
    //     data: {
    //         name: 'Roger',
    //     },
    // })

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })