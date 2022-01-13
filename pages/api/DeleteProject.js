import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async (req, res) => {
   const data = JSON.parse(req.body);
   console.log(data)
    const deletedProject = await prisma.project.delete({
        where: {
            id: data
        }
    })
    res.json(deletedProject)
}