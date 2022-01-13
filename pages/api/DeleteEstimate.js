import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async (req, res) => {
   const data = JSON.parse(req.body);
   console.log(data)
    const deletedEstimate = await prisma.estimate.delete({
        where: {
            id: data
        }
    })
    res.json(deletedEstimate)
}