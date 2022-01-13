import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async (req, res) => {
    const data = JSON.parse(req.body)
    console.log(data)
    const createdRequirement = await prisma.requirement.create({
        data: {
            content: data.formData.content,
            project: {
                connect: {
                    id: parseInt(data.id)
                }
            }
        },
    })
    res.json(createdRequirement)
}