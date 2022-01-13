import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async (req, res) => {
   const data = JSON.parse(req.body);
   console.log(data)
    const deletedRequirement = await prisma.requirement.delete({
        where: {
            id: data
        }
    })
    res.json(deletedRequirement)
}
