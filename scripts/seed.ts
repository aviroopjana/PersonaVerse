const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
    try{
        await db.category.createMany({
            data: [
                {name: "Actors"},
                {name: "Musicians"},
                {name: "Sports"},
                {name: "Animals"},
                {name: "Philosophy"},
                {name: "Scientists"},
                {name: "Entrepreneurs"},
                {name: "Artists"},
                {name: "Social Activists"},
                {name: "Politicians"},
                {name: "Authors"},
                {name: "Film Makers"},
            ]
        })
    } catch (error) {
        console.error("Error seeding default categories",error);
    } finally {
        await db.$disconnect;
    }
}

main();