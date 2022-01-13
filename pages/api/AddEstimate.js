import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async (req, res) => {
    const data = JSON.parse(req.body)
    console.log(data)
    const createdEstimate = await prisma.estimate.create({
        data: {
            content: data.formData.content,
            requirement: {
                connect: {
                    id: parseInt(data.id)
                }
            }
        },
    })
    res.json(createdEstimate)
}