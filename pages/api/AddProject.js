import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async (req, res) => {
    const projectData = JSON.parse(req.body)

    try {
        const createProject = await prisma.project.create({
            data: projectData
        });
        res.status(200).json(createProject)
    } catch (error) {
        console.log(error);
        res.status(403).json({ error: 'Error occured while adding new project'})
    }
}

