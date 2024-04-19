const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.use(express.json());

router.get('/', async (req, res) => {
    try {
        const professorList = await prisma.professor.findMany({
            select: {
                id: true,
                firstName: true,
                lastName: true,
                events: true
            }
        });

        res.send(professorList);
    } catch (err) {
        res.status(500).send(`There was an unexpected error: ${err}`);
    }
});

router.post('/', async (req, res) => {
    const { firstName, lastName } = req.body;

    try {
        const professor = await prisma.professor.create({
            data: {
                firstName,
                lastName
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                events: true
            }
        });

        res.send(professor);
    } catch (err) {
        res.status(500).send(`Failed to add new professor. Error: ${err}`);
    }
});

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName } = req.body;

    try {
        const updatedProfessor = await prisma.professor.update({
            where: {
                id: id
            },
            data: {
                firstName: firstName,
                lastName: lastName
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                events: true
            }
        });

        res.send(updatedProfessor)
    } catch (err) {
        res.status(500).send(`Failed to update professor with id ${id}. Error: ${err}`);
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.professor.delete({
            where: {
                id: id
            }
        });

        res.send("Professor was deleted");
    } catch (err) {
        res.send(`Professor not deleted. Error: ${err}`)
    }
})

router.post("/:professorId/events", async (req, res) => {
    const { professorId } = req.params;
    const { title, description, startTime, endTime, days, eventType } = req.body;

    try {
        await prisma.event.create({
            data: {
                title,
                description,
                professorId,
                startTime,
                endTime,
                days,
                eventType
            }
        });

        const updatedProfessor = await prisma.professor.findUniqueOrThrow({
            where: {
                id: professorId
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                events: true
            }
        })

        res.send(updatedProfessor);
    } catch (err) {
        res.status(500).send(`Failed to add new event. Error: ${err}`);
    }
});

module.exports = router;